from django.views.generic import View
from django.http import JsonResponse
from .models import Scraper
import requests
import json

class ScraperAPI(View):
    def get(self, *args, **kwargs):
        try:
            items = Scraper.objects.all()
            return JsonResponse({"scrapers": list(items.values())}, status=200, safe=False)
        except Exception as error:
            return JsonResponse({"error": str(error)}, status=400)

    def post(self, *args, **kwargs):
        try:
            data = json.loads(self.request.body)
            validate = validate_currency(data["currency"])

            if validate["status"]:
                item = Scraper()
                item.currency = data["currency"]
                item.frequency = data["frequency"]
                item.value = validate["data"]["value"]
                item.save()
                
                return JsonResponse({
                    "id": item.id,
                    "created_at": item.created_at,
                    "currency": data["currency"],
                    "frequency": data["frequency"],
                    }, status=201, safe=False)
            else:
                return JsonResponse({"error": validate["error"]}, status=400)
        except Exception as error:
            return JsonResponse({"error": str(error)}, status=400)

    def put(self, *args, **kwargs):
        try:
            data = json.loads(self.request.body)
            item = Scraper.objects.get(pk=data["id"])
            item.frequency = data["frequency"]
            item.save()
            return JsonResponse({"msg": "Scraper updated"}, status=201, safe=False)
        except Exception as error:
            return JsonResponse({"error": str(error)}, status=400)

    def delete(self, *args, **kwargs):
        try:
            data = json.loads(self.request.body)
            item = Scraper.objects.get(pk=data["id"])
            item.delete()
            return JsonResponse({"msg": "Scraper deleted"}, status=200, safe=False)
        except Exception as error:
            return JsonResponse({"error": str(error)}, status=400)


def validate_currency(name):
    status = False
    error = None
    data = dict()
    url = "https://coinmarketcap.com/"
    name = name.lower()

    if Scraper.objects.filter(currency__icontains=name).exists():
        error = "Currency registered"
    else:    
        response = requests.get(url)
        if response.status_code == 200:
            response = str(response.content, 'utf-8')
            response = response.split('<script id="__NEXT_DATA__" type="application/json">')
            response = response[1].split('</script><script nomodule=""')
            response = json.loads(response[0])
            currencies = response["props"]["initialState"]["cryptocurrency"]["listingLatest"]["data"]

            for currency in currencies:
                if currency["name"].lower() == name:
                    data["value"] = round(currency["quote"]["USD"]["price"], 2)
                    status = True
                    break

            if not status:
                error = "Currency not found"
        else:
            error = "Connection could not established"

    return {
        "status": status,
        "error": error,
        "data": data
        }

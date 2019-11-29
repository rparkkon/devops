# -*- coding: utf-8 -*-

from __future__ import print_function, absolute_import, unicode_literals
import json
import logging


logger = logging.getLogger('yledl')


class AreenaGeoLocation(object):
    def __init__(self, httpclient):
        self.httpclient = httpclient

    def located_in_finland(self, referrer):
        endpoint = 'https://locations.api.yle.fi/v1/address/current?'\
            'app_id=player_static_prod&'\
            'app_key=8930d72170e48303cf5f3867780d549b'
        extra_headers = {
            'Referer': referrer,
            'TE': 'Trailers',
        }
        r = self.httpclient.get(endpoint, extra_headers)
        if r is None:
            return True
        else:
            response = r.json()
            logger.debug('Geo query response:')
            logger.debug(json.dumps(response))

            return response.get('country_code') == 'FI'

---
rank: 4
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/for-enterprise
required_guides: []
alias_paths: []
---

# `SHIELD_ALERT` events

`SHIELD_ALERT` events provide information on security incidents in an
enterprise with [Box Shield][box-shield] enabled and configured to listen for
those events.

The possible `SHIELD_ALERT` produced by Shield are:

1. Suspicious locations
1. Suspicious sessions
1. Anomalous download
1. Malicious content

All `SHIELD_ALERT` events will be produced within the
[enterprise event][g://events/for-enterprise/] stream (not the user stream) and
will follow the standard event object schema, with the `event_type` value set
to `SHIELD_ALERT`.

```js
{
   "source":null,
   "created_by":{
      "type":"user",
      "id":"2",
      "name":"Unknown User",
      "login":""
   },
   "action_by":null,
   "created_at":"2019-12-20T11:38:56-08:00",
   "event_id":"97f1b31f-f143-4777-81f8-1b557b39ca33",
   "event_type":"SHIELD_ALERT",
   "ip_address":"10.1.2.3",
   "type":"event",
   "session_id":null,
   "additional_details":{
      ...
   }
}
```

Information about the specific type of `SHIELD_ALERT` that triggered the event
will be supplied within the `additional_details` object.

## Suspicious Locations Alert

A suspicious locations alert will be produced when an account within the
enterprise has been accessed from a suspicious location. It can be identified
by the `Suspicious Locations` value within
`additional_details.shield_alert.rule_category`.

The `additional_details` payload will provide the following details.

```js
  "additional_details":{
    "shield_alert":{
      "rule_category":"Suspicious Locations",
      "rule_id":123,
      "rule_name":"Suspicious Location",
      "risk_score":60,
      "alert_summary":{
        "alert_activities":[
          {
            "occurred_at":"2019-12-20T11:37:05-08:00",
            "event_type":"Download",
            "item_name":"xyz.txt",
            "item_type":"file",
            "item_id":"127",
            "item_path":"ABC/DEF",
            "ip_info":{
              "ip":"1.2.3.4",
              "latitude":"37.5555",
              "longitude":"-120.6789",
              "registrant":"Microsoft Corporation",
              "country_code":"US",
              "city_name":"San Jose",
              "region_name":"California"
            },
            "service_name":"Box Excel Online Previewer"
          }
        ]
      },
      "alert_id":2398,
      "priority":"medium",
      "user":{
        "id":2320,
        "name":"Some name",
        "email":"some@email.com"
      },
      "link":"https://app.box.com/master/shield/alerts/2398",
      "created_at":"2019-12-20T11:37:15-08:00"
    }
  }
```

## Suspicious Sessions Alert

A suspicious locations alert will be produced when abnormal behavior has been
detected in the account session. It can be identified by the `Suspicious
Sessions` value within `additional_details.shield_alert.rule_category`.

The `additional_details` payload will provide the following details.

<!-- markdownlint-disable line-length -->
```js
  "additional_details":{
    "shield_alert":{
      "rule_category":"Suspicious Sessions",
      "rule_id":123,
      "rule_name":"Suspicious Session",
      "risk_score":77,
      "alert_summary":{
        "description":"First time in prior month user connected from ip 2.3.4.5 First time user agent Some User Agent (Some UA 4.5.6) appeared for user within prior month Apparent distance 9580.0 km between events 59 seconds apart is faster than possible",
        "sessions":[
          {
            "session_type":"suspicious",
            "activities":[
              {
                "occurred_at":"2019-12-19T11:37:00-08:00",
                "event_type":"Set shared link expiration",
                "item_name":"xyz.txt",
                "item_type":"file",
                "item_id":"123456",
                "item_path":"ABC/DEF",
                "ip_info":{
                  "ip":"2.3.4.5",
                  "latitude":"37.5555",
                  "longitude":"-120.6789",
                  "registrant":"Microsoft Corporation",
                  "country_code":"US",
                  "city_name":"San Jose",
                  "region_name":"California"
                },
                "service_name":"ServiceName"
              }
            ]
          },
          {
            "session_type":"typical",
            "activities":[
              {
                "occurred_at":"2019-12-19T11:37:59-08:00",
                "event_type":"Item Modified",
                "item_name":"abc.boxnote",
                "item_type":"file",
                "item_id":"123123",
                "item_path":"folder/sub folder",
                "ip_info":{
                  "ip":"4.5.6.7",
                  "latitude":"37.5555",
                  "longitude":"-20.6789",
                  "country_code":"US",
                  "city_name":"Some City",
                  "region_name":"XYZ"
                },
                "service_name":"Box Notes"
              }
            ]
          }
        ]
      },
      "alert_id":500,
      "priority":"medium",
      "user":{
        "id":50500,
        "name":"A b c",
        "email":"a@b.c"
      },
      "link":"https://cloud.app.box.com/master/shield/alerts/500",
      "created_at":"2019-12-20T11:38:16-08:00"
    }
  }
```
<!-- markdownlint-enable line-length -->

## Anomalous Download Alert

A suspicious locations alert will be produced when anomalous content download
behavior has been detected. It can be identified by the `Anomalous Download`
value within `additional_details.shield_alert.rule_category`.

The `additional_details` payload will provide the following details.

<!-- markdownlint-disable line-length -->
```js
  "additional_details":{
    "shield_alert":{
      "rule_category":"Anomalous Download",
      "rule_id":123,
      "rule_name":"Anomalous Download Rule",
      "risk_score":77,
      "alert_summary":{
        "description":"Significant increase in download content week over week, 9200% (25.04 MB) more than last week 12 additional files downloaded week over week)",
        "download_delta_size":"25 Mb",
        "download_delta_percent":9200,
        "historical_period":{
          "date_range":{
            "start_date":"2019-12-01T01:01:00-08:00",
            "end_date":"2019-12-08T01:01:00-08:00"
          },
          "download_size":"0 Mb",
          "downloaded_files_count":1
        },
        "anomaly_period":{
          "date_range":{
            "start_date":"2019-12-08T01:01:00-08:00",
            "end_date":"2019-12-15T01:01:00-08:00"
          },
          "download_size":"25 Mb",
          "downloaded_files_count":13
        },
        "download_ips":[
          {
            "ip":"1.2.3.4"
          }
        ]
      },
      "alert_id":444,
      "priority":"medium",
      "user":{
        "id":567,
        "name":"Some user",
        "email":"some@user.com"
      },
      "link":"https://cloud.app.box.com/master/shield/alerts/444",
      "created_at":"2019-12-20T11:38:16-08:00"
    }
  }
```
<!-- markdownlint-enable line-length -->

## Malicious Content Alert

A suspicious locations alert will be produced when malicious content has been
identified, such as a virus being detected. It can be identified by the
`Malicious Content` value within
`additional_details.shield_alert.rule_category`.

The `additional_details` payload will provide the following details.

```js
  "additional_details":{
    "shield_alert":{
      "rule_category":"Malicious Content",
      "rule_id":123,
      "rule_name":"Viruses and stuff",
      "risk_score":100,
      "alert_summary":{
        "upload_activity":{
          "occurred_at":"2019-12-20T11:37:05-08:00",
          "event_type":"Upload",
          "item_name":"virus.exe",
          "item_type":"file",
          "item_id":"127",
          "item_path":"ABC/DEF",
          "sha1_hash":"",
          "ip_info":{
            "ip":"1.2.3.4",
            "latitude":"37.5555",
            "longitude":"-120.6789",
            "registrant":"Microsoft Corporation",
            "country_code":"US",
            "city_name":"San Jose",
            "region_name":"California"
          },
          "service_name":"Service name"
        }
      },
      "malware_info":{
        "file_id":127,
        "file_name":"malware.exe",
        "file_version":4239023,
        "file_created":"2019-12-20T11:37:05-08:00",
        "file_created_by":{
          "id":1010,
          "name":"Bob",
          "email":"bob@enterprise.com"
        },
        "file_hash":"d869db7fe62fb07c25a0403ecaea55031744b5fb",
        "file_hash_type":"SHA-1",
        "file_size_bytes":51345,
        "file_version_uploaded":"2019-12-20T11:37:05-08:00",
        "file_version_uploaded_by":{
          "id":1011,
          "name":"Jane",
          "email":"jane@enterprise.com"
        },
        "status":"Malicious",
        "categories":[
          "Adware",
          "SpyWare"
        ],
        "tags":[
          "FILE_MALICIOUS_EXECUTION",
          "FILE_OTHER_TAG"
        ],
        "description":"This is a really bad file",
        "detail_link":"https://some.link/xyz",
        "malware_name":"BadMalware",
        "first_seen":"2019-12-19T11:37:05-08:00",
        "last_seen":"2019-12-20T11:37:05-08:00",
        "family":"MalwareBot4000"
      },
      "alert_id":2398,
      "priority":"medium",
      "user":{
        "id":2320,
        "name":"Some Name",
        "email":"some@email.com"
      },
      "link":"https://app.box.com/master/shield/alerts/2398",
      "created_at":"2019-12-20T11:37:15-08:00"
    }
  }
```

[box-shield]: https://www.box.com/shield
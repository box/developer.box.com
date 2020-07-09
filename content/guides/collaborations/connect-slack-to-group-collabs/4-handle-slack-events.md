---
type: quick-start
hide_in_page_nav: true
---

# Handle Slack Events

`/boxadd` command

{
  token: 'eF4PwB0eIMcRHZWwVJKI3ejo',
  team_id: 'T015DQSV48P',
  team_domain: 'developertest-hq',
  channel_id: 'C015N96MFHU',
  channel_name: 'bottest',
  user_id: 'U016JCDPN56',
  user_name: 'joncleblanc',
  command: '/boxadd',
  text: 'file 123456',
  response_url: 'https://hooks.slack.com/commands/T015DQSV48P/1204206313778/ankvsRb57WKnKPRp00lFeyTx',
  trigger_id: '1189463708855.1183842990295.cca20c3ca1ea193dab286ad8e9e36540'
}


Person joined the channel

```javascript
{
  token: 'eF4PwB0eIMcRHZWwVJKI3ejo',
  team_id: 'T015DQSV48P',
  api_app_id: 'A015V215PQT',
  event: {
    type: 'member_joined_channel',
    user: 'U0167JM2ZLZ',
    channel: 'C015N96MFHU',
    channel_type: 'C',
    team: 'T015DQSV48P',
    inviter: 'U016JCDPN56',
    event_ts: '1592858788.000700'
  },
  type: 'event_callback',
  event_id: 'Ev015NAXTNSJ',
  event_time: 1592858788,
  authed_users: [ 'U0167JM2ZLZ' ]
}
```

Person left the channel

```javascript
{
  token: 'eF4PwB0eIMcRHZWwVJKI3ejo',
  team_id: 'T015DQSV48P',
  api_app_id: 'A015V215PQT',
  event: {
    type: 'member_left_channel',
    user: 'U01676B9N57',
    channel: 'C015N96MFHU',
    channel_type: 'C',
    team: 'T015DQSV48P',
    event_ts: '1593033236.000600'
  },
  type: 'event_callback',
  event_id: 'Ev0160DCG735',
  event_time: 1593033236,
  authed_users: [ 'U0167JM2ZLZ' ]
}
```
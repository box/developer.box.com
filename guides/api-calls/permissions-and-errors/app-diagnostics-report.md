---
rank: 5
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: api-calls/permissions-and-errors
is_index: false
id: api-calls/permissions-and-errors/app-diagnostics-report
type: guide
total_steps: 5
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: ''
previous_page_id: api-calls/permissions-and-errors/expiration
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/permissions-and-errors/app-diagnostics-report.md
---
# App Diagnostics Report

The App Diagnostics Report writes out most API calls made by the application
during the time frame specified. The report gives you access to the
`API Request ID`, which can be given to Box Support for troubleshooting
purposes.

<Message type="warning">

This report will not show API calls made within the last 48 hours, so it
cannot be used for in the moment troubleshooting. We are working to improve
this in the future.

</Message>

<Message type="notice">

This report is being rolled out gradually to customers. We plan to have the
report fully released by October 25th.

</Message>

## 1. Click on the New Menu Option

To run the App Diagnostics Report, click the App Diagnostics option located
along the top of your application's configuration section.

<ImageFrame center shadow>

![New Menu Option](./images/New-Menu-Option.png)

</ImageFrame>

## 2. Click Run App Diagnostics Report

Click the blue button to make a popup appear.

<ImageFrame center shadow>

![App Diagnostic Menu](./images/Menu-Option-Screen.png)

</ImageFrame>

## 3. Select Report Parameters and Click Run

You can select a date in the last two weeks, starting 48 hours prior to today.
A report can be ran for up to a total of 24 hours. Click Run.

<ImageFrame center shadow>

![Report Options](./images/Report-Option-Screen.png)

</ImageFrame>

## 4. Find and Open the Box Reports Folder

After clicking run, go to the Box Reports folder - which is located in the root
folder of your Box Account. Open the folder.

<ImageFrame center shadow>

![Box Report Folder](./images/Box-Report-Folder.png)

</ImageFrame>

## 5. Find and Open the latest Platform App Diagnostics Report Folder

In this Box Reports folder, you will see all the reports your user has ever ran.
Locate the most recent Platform App Diagnostics run folder, and open it.

<ImageFrame center shadow>

![Box Report Folder Contents](./images/Box-Report-Folder-Contents.png)

</ImageFrame>

## 6. Check the Status

The report will take time to complete. You can see the status in the box at the
top of the folder.

<ImageFrame center shadow>

![Status Screen](./images/App-Diagnostics-Status.png)

</ImageFrame>

## 7. Report Completed

Upon completion, the status will change, and the csv file will appear in the
folder.

<ImageFrame center shadow>

![Diagnostics Report](./images/Diagnostics-Report.png)

</ImageFrame>

## 8. Open the Report

You can open the file in your web browser or download it to view locally. If
you need help from [Box Support][support], you can send in the report with your
ticket by attaching a downloaded copy or via shared link.

<ImageFrame center shadow>

![Report Details](./images/Report-Details.png)

</ImageFrame>

The report has nine columns.

| Column                    | Description                                    |
|---------------------------|------------------------------------------------|
| App Name                  | The name of the application |
| Client ID                 | The Client ID of the application |
| HTTP Status Code          | The response code Box sent back |
| API Request Duration (ms) | The amount of time from API call to response |
| API Request ID            | An identifier that can be used by support |
| Resource                  | The primary resource accessed in the API call |
| Sub Resource              | The secondary resource accessed in the API call |
| HTTP Method               | The type of HTTP method used in the API call |
| API Request Timestamp     | The timestamp of the API call |

[support]: https://support.box.com/hc/en-us/requests/new
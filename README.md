# sysAlert.js - a jQuery plugin #


This jQuery plugin is made to allow quickly adding user notifications to a website or webpage for any scheduled service interruptions.


## Version ##

0.0.1


## Quick Sample ##

See [sample in plnkr] 


## Getting Started ##

1. Copy the content of the `dist` folder into your project.
2. Add references to the js and css files to the web pages that you want to show an system alert message. Also add reference to [jQuery], and optionally to the [FontAwesome] css. If you do not want to use FontAwesome, that's okay. Your system alert message will simply not show the FontAwesome bullhorn icon on the left of the system alert message.
3. Define an element that will contain the system alert message. 
4. Call sysAlert as follow: `$('your element selector').sysAlert({options})`


## Options ##

* `sourceUrl` - This is the URL to get your json file which defines your system alert. Defaults to `'/sysalert.json'`
* `sourceMethod` - The http method to use to retrieve your json file. Defaults to `'GET'`
* `allowHtml` - This indicates if your system alert has embeded HTML tags. Defaults to `false`,
* `complete` - This is the function to call on completion of sysAlert


## JSON Content ##

The JSON file may be named any name you like. But these are the properties sysAlert.js will look for:

* `shortAlert` - *This is mandatory.* This is the alert message that is initially shown on the page. If `allowHtml` is `true`, this is interpreted as an HTML markup.
* `longAlert` - *This is optional.* This is the alert message shown when the user expands the alert to read more information. If `allowHtml` is `true`, this is interpreted as an HTML markup.
* `postFrom` - *This is optional.* This indicates when the alert becomes effective. It can be a date such as `2015-07-01` or a date\time such as `2015-07-01T00:00:01`. It not specified, it is assumed the alert is effective immediately.
* `postUpto` - *This is mandatory.* This indicates when the alert expires. It has the same format as `postFrom`.


## IIS and JSON Files ##

If you are using IIS, it may not be configured to server static JSON files. To tell IIS that your site can serve JSON static files, you should have a `mimeMap` in your `web.config`, like this:

```
<system.webServer>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
    </staticContent>
</system.webServer>
```



[sample in plnkr]:http://run.plnkr.co/plunks/wytJTIVQgGpaeOEMHXIf/


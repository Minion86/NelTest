
How long did you spend on the coding test? What would you add to your solution if you had more time? 
If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

It took me about 5 hours to design the styles and to test and see how your restApi works, fortunately most of the
user case could be done, I don't have much time to do it it in the week, so I coded the test in n the weekend,
If I had more time I would have designed the styles for the details and I would have built the search page to complete the user case




What was the most useful feature that was added to the latest version of your chosen language? 
Please include a snippet of code that shows how you've used it.

The mapping feature and returning the json value converted as a class

 return this.http.get(this.apiUrl + "devices?size=" + size + "&page=" + page + "&order=" + tab + "%3A" + order)
            .map(res => res as DevicesSearchModel);

How would you track down a performance issue in production? Have you ever had to do this?

In databases you have profilers, in servers like glassfish or payara you have tools like JMonitor, with that you see how much heap space objects use

How would you improve the Knetik APIs that you just used?

First fixing the connected filter, it doesn't filter the connected=true results first, no matter what I tried

Please describe yourself using JSON.

At first it was complicated to learn, but with time and practice it is a very light solution to share data in distributed systems and mobile devices,
some time agou I used to use always soap services, but with rest services with json data things got much lighter and easier
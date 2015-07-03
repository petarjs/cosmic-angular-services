# List of Services

In this first exercise we will make a list of offered services.  
The services in the list have a name and a price.  
Clicking on a service selects or deselects that service.  
Services that are selected are red, while the selected ones are green.  
Below the list, we want to show the calculated sum of all selected services.  

You will find the image depicting the task in `example-image` folder.

## Submitting your solutions

To submit your solution, clone this repo and make a branch with your name in it, for example  
`git checkout -b bradonja`  
and push it.

## Asking questions

If you come accross something that's bugging you, please submit an issue to this repo.  
I will reply as soon as I can.

## Points of extension

These are the additional tasks that we can do.

### Discount

Add a field to enter a promo code.  
If the entered code is `NG-IS-COOL`, decrease the price by 25%.

### Loading from server

Lets load the services array from the server.  
To make it simple, we'll just put the array in a `services.json` file.  
To get the services from the server, we will use the `$http` service.

### Adding services

If we wanted to add new services to the list, we would need to make a form for it.  
Make a form with two inputs - name and price, and a button.  
When the button is clicked, add the new service to the list. (Hint: `ng-click`)  
We also want for newly added services to appear on top of the list.

### Search

We want to have instant search of our services.  
Add an input box above the services list that will be used as a filter.  
Filter the list of services to show only those services whose name matches the filter.  
(Hint: use angular's filters inside of `ng-repeat`)


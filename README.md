# PointInside Take Hom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Running the Project
From the top directory of the project, run npm install to retrieve all node packages.  Run ng serve to start up the local version of the app; it should be running on http://localhost:4200 now.  In your selected browser, please install a browser addon to bypass CORS so that you may actually retrieve the data from the API request.  You may now enter in valid coordinates into the two input fields.  

## Strategy
I chose to use two way data binding for the two input fields instead of using a form, either template driven or reactive, simply because I usually use reactive forms for this situation and wanted to do something different.  I am using some very basic validation checking, only to determine that the latitude and longitude variables actually have content, not what type they are, or any other formatting that might be required of coordinates.  I separated the method to do the validation checking out however, because I understand that this could be a need of the app in the future.  

The CORS roadblock is always annoying when dealing with Angular, as you cannot directly bypass it simply in the front end.  I initially setup an API which you can see from my first commit, where I had intended on using Node, Express, and a CORS package to work around the issue, but because of the simplicity of the API, I chose to just use a browser plugin/addon.  I also considered using a proxy server package for angular, but the addon saved me a great deal of time already.  

Everything is styled by myself, I did not use any CSS frameworks like Bootstrap or Material.  I use a simple CSS grid system to have the inputs side by side, and some other basic styling utilizing the transpiling technology of SCSS.  

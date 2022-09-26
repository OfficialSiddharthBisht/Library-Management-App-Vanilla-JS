# Library-Management-App-Vanilla-JS

Template:-
You should follow the exact folder structure as given below:-

Question Description:-
Before writing any code please read the problem statement very carefully.

Here you have to build a Library Management System.
Your application had a Navbar that contains 4 tabs (this is already in the template no need to build).

Home
Dashboard
My Books
Bookmark

Home Page:-
This page contains a form with 5 input boxes and one select tag having the following fields (this is already in the template no need to build).
Book Name
Author Name
Book Description
Added Date
Book Category(Select)

On clicking on form submit (form submit event) you should store students' data in your local storage with the key "book-list"
  Hint : localStorage.setItem("book-list",JSON.stringify)
Refer to this image for better understanding:-Screenshot 2022-08-18 at 10.12.16 AM.png

Dashboard Page:-
In this page all the data from the book-list will be shown in a table format.

The table will have the following columns:-
Name
Author
Description
Added Date
Category
Price
Buy
Bookmark
Here the values will come from the LacalStorage Except for the last 2 columns.
In the Buy column for each row you should put the value Buy.
In the Bookmark column for each row you should put the value Add.
These texts Add and Buy are case sensitive so please make sure there is no spelling mistake.
When you click on the Buy button that particular row should be deleted and should be added in a new localStorage with the key buy-list
  Hint : localStorage.setItem("buy-list",JSON.stringify)
Similarly when you click on the Add button that particular row should be deleted and should be added in a new localStorage with the key bookmark-list
Reffer to this image for better understanding:-Screenshot 2022-08-18 at 10.18.48 AM.png
In this page we will also have a part which counts the no of current books added. It should be updated along with adding new books or deleting books.
We will also have a select tag. Using this we can filter books by category.
My Books Page:-
In this page all the data from the buy-list will be shown in a table format.

The table will have the following columns:-
Name
Author
Description
Added Date
Category
Price

Here the values will come from the LacalStorage.

Bookmark Page:-
In this page all the data from the bookmark-list will be shown in a table format.
The table columns are same as the My Books Page.

What to submit:
Deployed link (Netlify - Create an account and submit)!
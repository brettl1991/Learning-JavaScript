'use strict';
//3 sources of data:
//1. from the program itself: data written directly in source code(e.g. status message)
//2. from the UI: data input from the user or data written in DOM(e.g. tasks in todo app)
//3. from external sources: data fetched from web API (application programming interface, basically we can get data from other web applications) (e.g. data from weather, movies everywhere)

//Than we need to store these collection of data
//4 built in data structure

//if we need just a simple list of values, we'll use array or a set
//if we need key value pairs, we'll use objects or maps, because keys allow us to discribe a value

//most common data source is web api, which comes in a data format called json(text) which can be converted to js objects

//when to use arrays? when you need ordered list of values (might contain duplicates), or when you need to maipulate data
//when to use sets? when you need to work with unique values, when high-performance is really important, when you want to remove duplicates from arrays

//when to use objects? when to use maps?
//objects: more traditional key/value store, easier to write and access values with . and []. Use when you need to include functions(methods),or when working with JSON (can convert to map)
//maps: better performance,keys can have any data type,easy to iterate,easy to compute size. Use when simply need to mapkey to values, or when you need keys that are not strings

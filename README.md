# ThoughtMachine

## Install

git clone git@github.com:ibrokethat/thoughtmachine.git

cd thoughtmachine

npm install dependencies

## Start and build the app

npm start

##  view the app

http://localhost:8080


## run the tests

npm test


# todo

 * add styling.
 * add API's and database layer.
 * refactor collection to use sub collections for the filtered data sets.
 * create sensible abstractions to reduce duplicate boilerplate code.
 * write more tests :) I've only tested the logic for the collection as that is the only code I've written that isn't just wiring up instances of the framework classes.
 * use the enums in conf/default.yaml as opposed to hard coding them in the model and form.
 * gracefully handle empty data sets in the views

# Notes

I took around 9 hours; mainly as I decided to use framework I've never used before: so half of that time was spent reading the bloody docs...

I learnt:

  * How the particalur framework works - no bad thing.
  * That it requires a considerable amount of boilerplate code. Code that could be generated from a sensible combination of configuration and convention.
  * This particular frameworks idea of single page app development wouldn't easily lend itself to creating modular, self contained components, that could be embedded in 3rd party sites or applications over http. Which is something I consider to be fairly important.

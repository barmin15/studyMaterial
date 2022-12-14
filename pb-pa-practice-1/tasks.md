
## Bucket List

Using this website we can keep track of a bucket list - a list of things our user whishes to do in their life.

## Task 1

Some items are already marked `done`, but this is not visible.

Make it so that items which have the `done` property set to `true`, show up with a green background color.

## Task 2

There's a button with a checkmark for each element. When the user clicks this button, the `done` property of the associated object should be set to `true` and the background of the element should change to green.

## Task 3

Implement the "Calculate completion percentage" button, so that when the user clicks the button, the current ratio of completed tasks is shown as a percentage in the div with the id `completion`. (`0%` if no item is `done` and `100%` if all items are `done`)

## Task 4

We also want to keep track of the order in which we completed the items. For this we have the ordered list element with the id `completed-list`. Change the event listener of the checkmark button, so that when an item is completed, its text is added to the end of the `completed-list`.

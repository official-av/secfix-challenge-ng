# The Challenge:

Build a ToDo List App where you can add, edit and remove list items. You should be able to change the state of the items in the list e.g. set it from `IN_PROGRESS` to `COMPLETE`. Also you need to be able to change the name of it or remove the item entirely.

List items should be persisted in state (please use `ngrx` for this).

## Demo

You can find a demo of working example below:
[Example Demo](https://todo-list-redux-nextjs-swart.vercel.app/)

## Data Structure

A `ListItem` looks like below:

```
{
  "id": "1"
  "name": "My first item",
  "status": "COMPLETE",
}
```

## Your tasks

### Main Objectives

1. So far only listing all items is working. Please also add the feature that you can filter for items that are in progress or complete on the other tabs.
2. The functions for adding list items, changing status or removing are missing in the state/store. Please add them.
3. Refactor the list component into a reusable component across All, In Progress and Completed todos
4. So far you aren't able to change the name of a todo item. Please implement the feature that this is possible.
5. Please add unit tests to the components and the store where you think they are necessary.

### Bonus Objectives

- Please the feature that Todo's are prioritized by their priority level. For this you need to add a new property to the `ListItem` called `priority` which can be `LOW`, `MEDIUM` or `HIGH`. The list's in the view should be sorted by priority.

## Evaluation Criteria

We will evaluate this challenge based on what you consider production ready. This means if all features are implemented, the App is tested and the code is clean and well structured.

## Tech Stack Requirements

Please use the following libraries. Some are already installed:

- Ngrx for state management (installed)
- UI Library of your choice

## Resources

- You can use a UI library like Material UI [Link](https://v14.material.angular.io/guide/getting-started)

## Evaluation Criteria

- Completeness of deliverables
- The way how you built the components
- How production ready the solution is

## Approach

- cleanup + code walkthrough - DONE
- add filter + listing - DONE
- add actions + reducers - DONE
- add facade for interacting with store - DONE
- use facade in ui (for triggering store) - DONE
- Split todo into container+presentation components - DONE
- make reusable components - DONE
- add components - DONE
- change name - DONE
- add/fix unit tests - DONE
- add optimisations - DONE
- bonus task

## Decisions - Reasons

- added devtools - for logs and visualising/monitoring state changes, debugging
- used facade - SRP, easy to test maintain and scale
- edit directly on UI not in dialog, A/B testing - less clicks, good ui
- used changeDetection OnPush - lesser change detection cycles for performant and minimal renders
- used container + presentational components pattern - easy testing and maintenance with SRP, easy to scale, (DRY tradeoff+KISS tradeoff for scalability and boilerplate code)

## FUTURE - Good to haves

- storybook - for design system
- compodoc - for documentaion
- todo container component can be detached from change detection - and manual Change detection run only on todos list update
- store actions can be dispatched outside zone via utility function in facade service
- global meta reducer can be added to sync state with localStorage/Indexed DB for local-first development
- sync state in localStorage/indexedDB with actual DB every 50 actions or polling
  after 20mins or with web sockets
- app can be converted to standalone app for more controlled lazy loading (on component level) - not needed at this stage
- builder can be swithced to esbuild after upgrade to ng 16 and jest for testing
- integration tests for ui-facade-service interactions, facade-service-store interactions can be added

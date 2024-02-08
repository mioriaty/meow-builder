
# Meow Builder

## Folder Structure

The <strong>layers</strong> are standardized across all projects and vertically arranged. Modules on one layer can only interact with modules from the layers strictly below. There are currently seven of them (bottom to top):

<img src="https://feature-sliced.design/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg" />

1. ```shared``` --- reusable functionally, detached from the specifics of the project/business. (e.g. lib, ui, API...)
2. ```entities``` --- business entities. (e.g. User, Product, ...)
3. ```features``` --- user interactions, actions that bring business value to the user. (e.g. SendComment, AddToCart)
4. ```widgets``` --- compositional layer to combine entities and features into meaningful blocks. (e.g. IssueList, UserProfile)
5. ```pages``` --- compositional layer to construct full pages from entities, features and widgets.
6. ```app``` --- app-wide settings, styles and providers.
7. ```generated``` -- data type from prisma db. (e.g. User, Agency, ...)

The there are <strong>slices</strong>, which partition the code by business domain. This makes your codebase easy to navigate by keeping logically related modules close together. Slices cannot use other slices on the same layer, and that helps with high cohesion and low coupling.

Each slice, in turn, consists of <strong>segments</strong>. These are tiny modules that are meant to help with separating code within a slice by its technical purpose. The most common segments are ui, model (store, actions), api and lib (utils/hooks), but you can omit some or add more, as you see fit.

## Example

Let's consider a social network application.

- ```app/``` contains setup of routing, store and global styles.
- ```pages/``` contains the route components for each page in the app, mostly composition, hardly logic.

Within that application, let's consider a post card in a news feed.

- ```widgets/``` contains the "assembled" post card, with content and interactive buttons that are wired up to the relevant calls on the back-end.
- ```features/``` contains the interactive of the card (e.g. like button) and the logic of processing those interactions.
- ```entities/``` contains the shell of the card with slots for content and the interactive elements. The tile representing the post author is also here, but in a different slice.

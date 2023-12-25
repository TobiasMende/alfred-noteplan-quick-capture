# NotePlan Quick Capture – Alfred Workflow
An Alfred Workflow to quickly add tasks and notes to [NotePlan](https://noteplan.co/) without leaving the current context.

## Usage
This workflow is designed to make adding thoughts to NotePlan even more effortless and without even leaving the application you are currently in.

1. Quickly capture notes into your Inbox in [NotePlan](https://noteplan.co/). The workflow supports a dedicated "Inbox Note" are a Folder.
2. Quickly capture tasks to today's Calendar Note in NotePlan.

### Triggers
- **Keywords:** You can trigger the app via Keyword (configurable). Defaults: `npi` to add something to the inbox and `npt` to add a task.
- **Hotkeys:** Use ⌃+⌥+⌘+I to add to the inbox and ⌃+⌥+⌘+O to add a task.
- **Universal Actions:** For text and URLs, this workflow provides universal actions to add selections quickly to the inbox or as task. By default the selection will be used as title (first line) of the addition. Use the ⌃ modifier to use it as text. The workflow will then prompt you for a title afterwards.
- **Fallback Search:** This workflow provides fallback search items, both for Inbox as for Tasks. Therefore, you can just start typing in Alfred and use one of the actions as a fallback.

### Modifiers
The *fallback search*, the *keyword* and the *universal action* provide the following modifiers (each in Inbox and Task mode):
- ⌘ – Add instantly, without prompting for additional text.
- ⌘+⌥ – Add instantly and invert the "Open Note" behaviour (see configuration).

When in the second prompt of the workflow (prompting for text), the ⌥ modifier can be used to invert the "Open Note" behaviour.

### Capturing Contexts in Browsers
When triggered in browsers, the *Universal Action* will add the current URL to the text of the capture. This makes it easy to not only capture the selection on a website but also the URL and Title of the website where this came from.
To deactivate this behaviour, clear the "Browser List" configuration.
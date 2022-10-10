# README

A simple create-react-app that I threw together to test the `react-table` lib. What I learned is that the basic table format remains the same for all
tables, and that what differentiates them from one another are the plugins. E.g., if I have a "standard" non-interactive table vs a sortable table;
the sortable table will use a hook as a plugin and as a result of using the hook the columns/rows may have additional properties (e.g. functions()).

I came to the conclusion that it might be better to separate the tables into separate components, e.g. `<TableStandard/>` and `<TableSortable />`,
instead of trying to pass props to one component and make determinations inside of it, e.g. `<Table isSortable>`.

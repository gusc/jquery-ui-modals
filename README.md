jQuery UI Modal dialogs
=======================

jQuery UI Modal dialogs for - alert, confirm and prompt

Installation
============


```html
<!DOCTYPE html> 
<html lang="en">
<head> 
  <meta charset="utf-8">
  <title>jQuery UI Modals</title>
  <link rel="stylesheet" type="text/css" href="//code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" media="screen, projection">
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
	<script type="text/javascript" src="jquery.ui.modals.js"></script>
</head>
<body>
  <!-- Your HTML goes here -->
</body>
</html>
```

Usage
=====

All three modal dialogs are implemented as global jQuery methods.

Alert
-----

You can call it simply by using $.alert({...options...})

Options:
```javascript
{
	title: 'Your dialog title',
	body: 'Your dialog body',
	ok: {
		text: 'OK',
		callback: function(){}
	}
}
```

Confirm
-------

You can call it simply by using $.confirm({...options...})

Options:
```javascript
{
	title: 'Your dialog title',
	body: 'Your dialog body',
	ok: {
		text: 'OK',
		callback: function(){}
	},
	cancel: {
		text: 'Cancel',
		callback: function(){}
	}
}
```

Prompt
-------

You can call it simply by using $.prompt({...options...})

Options:
```javascript
{
	title: 'Your dialog title',
	body: 'Your dialog body',
	ok: {
		text: 'OK',
		callback: function(value){}
	},
	cancel: {
		text: 'Cancel',
		callback: function(){}
	}
}
```
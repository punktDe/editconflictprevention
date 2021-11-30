# PunktDe.EditConflictPrevention

[![Build Status](https://travis-ci.com/punktDe/editconflictprevention.svg?branch=master)](https://travis-ci.com/punktDe/editconflictprevention) [![Latest Stable Version](https://poser.pugx.org/punktDe/editconflictprevention/v/stable)](https://packagist.org/packages/punktDe/editconflictprevention) [![Total Downloads](https://poser.pugx.org/punktDe/editconflictprevention/downloads)](https://packagist.org/packages/punktDe/editconflictprevention) [![License](https://poser.pugx.org/punktDe/editconflictprevention/license)](https://packagist.org/packages/punktDe/editconflictprevention)

This package helps preventing edit conflicts when several editors are working on content simultaneously. 

### Information about changes of the current document in other workspaces

When changes in other workspaces exist on the same document, a warning is displayed in the upper toolbar. 

![Edit conflict warning](Documentation/ChangesDetectedButton.png)	
Clicking that warning opens a modal, showing a list of changed nodes and where they have been changed. Contact information from Neos Party is displayed to make it easier to communicate.

![Edit conflict details](Documentation/ChangesOverlay.png)

### Prevent the editor to do conflicting changes

There are also privilege targets available which prevents editing a document and all containing content nodes when changes in other workspaces are detected. To prevent an editor from editing such pages, add the following privilege configuration to your `Policy.yaml` 

```yaml
roles:
	'Neos.Neos:AbstractEditor':
	privileges:
		-
		privilegeTarget: 'PunktDe.EditConflictPrevention.EditNodeWithChangesInOtherWorkspaces'
		permission: DENY
		-
		privilegeTarget: 'PunktDe.EditConflictPrevention.EditNodePropertiesWithChangesInOtherWorkspaces'
		permission: DENY
```

## Installation

```bash
composer require punktde/editconflictprevention  
```

## Configuration

`excludedDocumentTypes`: List the document types here, that you like to exclude from detecting conflicts.

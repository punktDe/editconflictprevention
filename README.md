# PunktDe.EditConflictPrevention

[![Latest Stable Version](https://poser.pugx.org/punktDe/editconflictprevention/v/stable)](https://packagist.org/packages/punktDe/editconflictprevention) [![Total Downloads](https://poser.pugx.org/punktDe/editconflictprevention/downloads)](https://packagist.org/packages/punktDe/editconflictprevention) [![License](https://poser.pugx.org/punktDe/editconflictprevention/license)](https://packagist.org/packages/punktDe/editconflictprevention)

This package helps preventing edit conflicts when several editors are working on content simultaneously. When changes in other workspaces exist on the same document, a warning is displayed, showing a list of changed nodes and where they have been changed. Contact information from Neos Party is displayed to make it easier to communicate.

There are also a privilege targets available which prevents editing a document and all containing content nodes when changes in other workspaces are detected.

![Edit conflict warning](Documentation/EditConflictWarning.png)


## Installation

    $ composer require punktde/editconflictprevention  

<!--- All methods in this helper will be available in all handlers,views & layouts --->
<cfscript>
function mixPath( name ) {
    if ( ! fileExists( expandPath( "/includes/build/manifest.json" ) ) ) {
        return name;
    }
    var manifest = fileRead( expandPath( "/includes/build/manifest.json" ) );
    if ( ! isJSON( manifest ) ) {
        return name;
    }

    manifest = deserializeJSON( manifest );
    if ( ! structKeyExists( manifest, name ) ) {
        return name;
    }

    return manifest[ name ];
}
</cfscript>

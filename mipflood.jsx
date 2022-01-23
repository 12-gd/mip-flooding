app.bringToFront();
var originalDoc = app.activeDocument;
var originalLayer = originalDoc.activeLayer;
var currentLayer = originalDoc.activeLayer;

currentLayer.duplicate();
var size = originalDoc.width;
var i = size/2;
for ( i; i > 1;i = i/2 ) 
{
  //newLayer.name = i;
  //newLayer.duplicate();
  var newDoc = originalDoc.duplicate();
   
  app.activeDocument = newDoc;
  newDoc.resizeImage(i,i,originalDoc.resolution,ResampleMethod.BICUBIC,0);
  newDoc.resizeImage(size,size,originalDoc.resolution,ResampleMethod.NEARESTNEIGHBOR,0);
  //
  var l;
 for(l=0;l<5;l++)
	{
	    newDoc.activeLayer.duplicate();
	}
newDoc.mergeVisibleLayers();	
	for(l=0;l<5;l++)
	{
	    newDoc.activeLayer.duplicate();
	}
newDoc.mergeVisibleLayers();	
	for(l=0;l<5;l++)
	{
	    newDoc.activeLayer.duplicate();
	}
newDoc.mergeVisibleLayers();	
	for(l=0;l<5;l++)
	{
	    newDoc.activeLayer.duplicate();
	}
newDoc.mergeVisibleLayers();	
	
  newDoc.selection.selectAll();
  newDoc.selection.copy();
  newDoc.close(SaveOptions.DONOTSAVECHANGES);
  app.activeDocument = originalDoc;
   originalDoc.paste();
   originalDoc.activeLayer.move( currentLayer, ElementPlacement.PLACEBEFORE );	
}
originalLayer.visible = false;
originalDoc.mergeVisibleLayers();	

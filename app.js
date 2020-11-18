

// retrive data with d3
var samples = "data/samples.json"

function buildMetadata(id){
    console.log(id)
d3.json(path).then(data => {
    console.log(data);
    d3.select("#sample-metadata").html("");
  });


 function buildPlots(id){
     d3.json(samples).then(function(data){

// horizontal bar chart with dropdown menu for top 10 OTUs. otu_ids = barchart labels / otu labels hovertext
var horz = {
    x: sample_values,
    y: otu_ids,
    text: otu_labels,
    type: "bar",
    orientation: "h",
};

var dropdownMenu = d3.select("#selDataset");
var dataset = dropdownMenu.property("value");
// ?????


// bubble chart. otu_ids = x AND marker colors / sample_values = y AND marker size / otu_labels = text values
var bubble = {
    x: samples.otu_ids,
    y: samples.sample_values,
    mode: "markers",
    text: samples.otu_labels,
    marker:{
        size: samples.sample_values,
        color: samples.otu_ids
    }

}

// display sample metadata ex) indv demographic info


// display each key value pair from the metadata json object somewhere


// update all of the plots any time that a new sample is selected
init()
})}}
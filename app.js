

// retrive data with d3
var samples = "data/samples.json"

function buildMetadata(sample){
    console.log(sample)
d3.json(path).then(function(data) {
    console.log(data);
  });


 function buildPlots(id)

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
    x: sample.otu_ids,
    y: sample.sample_values,
    mode: "markers",
    text: sample.otu_labels,
    marker:{
        size: sample.sample_values,
        color: sample.otu_ids
    }

}

// display sample metadata ex) indv demographic info


// display each key value pair from the metadata json object somewhere


// update all of the plots any time that a new sample is selected

}
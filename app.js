

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

var data = [trace];
var layout ={
    title: "Top 10 OTUs",
    yaxis: {
        type: "category"
    }
}

var dropdownMenu = d3.select("#selDataset");
var dataset = dropdownMenu.property("value");
// ?????

Plotly.newPlot("bar", data, layout)


// bubble chart. otu_ids = x AND marker colors / sample_values = y AND marker size / otu_labels = text values
var data1 = {
    x: data.otu_ids,
    y: data.sample_values,
    mode: "markers",
    text: data.otu_labels,
    marker:{
        size: data.sample_values,
        color: data.otu_ids
    }
};
var layout1 = {
    xaxis: {title: "OTU ID"}
    };

Plotly.newPlot("bubble", data1, layout1)

// bonus?



// display sample metadata ex) indv demographic info


// display each key value pair from the metadata json object somewhere

function init() {
    var selector = d3.select("#selDataset");
    d3.json("/names").then((sampleNames) => {
      // console.log(sampleNames);
      sampleNames.forEach((sample) => {
        selector
          .append("option", sample)
          .text(sample)
          .property("value", sample);
      });
      const firstSample = sampleNames[0];
      buildPlots(firstSample);
      buildMetadata(firstSample);
    });
  }

// update all of the plots any time that a new sample is selected

function optionChanged(newSample) {
    buildPlots(newSample);
    buildMetadata(newSample);
  }

init()
})}}
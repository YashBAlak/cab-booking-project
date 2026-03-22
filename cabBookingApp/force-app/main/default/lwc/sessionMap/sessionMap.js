import { LightningElement } from 'lwc';

export default class SessionMap extends LightningElement {
    
    markersTitle;
    center;
    mapMarkers = [
    {
      location: {
        Street: "M G Road",
        City: "Pune",
        State: "Maharashtra",
      },

      title: "Pune Pick up point",
      description:
        "Premium Inter city cabs: Pune Location",
    },
    {
      location: {
        Street: "Shivaji Park",
        City: "Mumbai",
        State: "Maharashtra",
      },

      title: "Mumbai Pick up point",
      description:
        "Premium Inter city cabs: Mumbai Location",
    },
    {
      location: {
        Street: "Ganeshwadi",
        City: "Nashik",
        State: "Maharashtra",
      },

      title: "Nashik Pick up point",
      description:
        "Premium Inter city cabs: Nashik Location",
    },
    {
      location: {
        Street: "Indira Gandhi Medical College",
        City: "Nagpur",
        State: "Maharashtra",
      },

      title: "Nagpur Pick up point",
      description:
        "Premium Inter city cabs: Nagpur Location",
    },
];
    markersTitle = "Coordinates for Centering";
    center = {
        location: { Latitude: "19.7515", Longitude: "75.7139" },
    };
}
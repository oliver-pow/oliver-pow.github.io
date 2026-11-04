
/*
  ADD PROJECTS HERE.

  Copy one project object and paste it after the previous one.

  category should be one of:
  "Electronics", "Software", "Hardware", "Other"

  MEDIA:

  Images:
  {
    type: "image",
    src: "images/photo.jpg"
  }

  GIFs:
  {
    type: "image",
    src: "images/animation.gif"
  }

  Videos:
  {
    type: "video",
    src: "videos/demo.mp4"
  }

  Supported formats include JPG, PNG, WebP, GIF, MP4 and WebM.

  The first media item becomes the project card thumbnail.

  RESOURCES:

  Add GitHub repositories, tutorials, documentation,
  datasheets and other references.
*/

const projects = [
  {
    title: "Sim-Racing Shifter",
    category: "Hardware",
    date: "2026",

    summary: "Custom machined aluminum shifter that uses an ESP32 as a HID device, along with some microswitches and a golf ball to top it off.",

    media: [
      {

        type: "image",
        src: "images/shifter/1.jpg"
      },

      {

        type: "image",
        src: "images/shifter/2.jpg"
      },

      {

        type: "image",
        src: "images/shifter/3.jpg"
      },

      {

        type: "image",
        src: "images/shifter/4.jpg"
      },

      {

        type: "image",
        src: "images/shifter/5.jpg"
      },

      {

        type: "image",
        src: "images/shifter/6.png"
      },


      {
        type: "video",
        src: "images/shifter/examplevideo.mp4"
      },
            {
        type: "video",
        src: "images/shifter/7.mp4"
      }
    ],

    details: "This was my first project that I made for sim-racing. I wanted a shifter that had a nice tactile feel. I designed the shifter in TinkerCAD, and machined the aluminum parts on a metal lathe. The shifter uses an ESP32 as a HID device, and has microswitches for each gear position. The golf ball is the best idea Ted Weston has ever thought of",

    challenges: "I made this in grade 11, before I learned how to use FreeCAD. This meant all the 3d parts were made in Tinkercad, making it very difficult to not only design, but to change afterwards (non-paremetric). ",

    outcome: "he shifter works great, and it taught me how much Tinkercad sucks, and is what motivated me to learn FreeCAD. I am happy with the tactile feel, as well as the aluminum shaft, however the 3D printed casing feels cheap and sounds hollow. If I had a parametric copy of the design files, I'd definietly make the casing shorter, or even get rid of the casing entirely and just have the shifter mounted to a plate.",

    link: "",

    resources: []
  },

  {
    title: "ESP32 Mint Tin NES Emulator", 
    category: "Electronics",
    date: "2026",

    summary: "An ESP32 running Anemoia-ESP32, an NES emulator, in a mint tin with a small ST7789 display, with parts from an original NES controller connected to an 8-bit shift register to read button presses.",

    media: [
      
     
   {
      type: "image",
      src: "images/mint/2.png"
    },
    { 
      type: "image",
      src: "images/mint/1.jpg"
    },
        { 
      type: "image",
      src: "images/mint/3.png"
    }

    ],

    details: "",

    challenges: "",

    outcome: "",

    link: "",

    resources: [
      {
        name: "Anemoia-ESP32",
        description: "Original GitHub repository for the NES emulator.",
        url: "https://github.com/Shim06/Anemoia-ESP32"
      }
    ]
  },

  {
    title: "Self-Hosted Home Server (Z440)",
    category: "Hardware",
    date: "2026",

    summary: "Repurposed HP Z440 workstation as a self-hosted home server running Ubuntu Server, with multiple  containers for various services such as Tailscale.",

    media: [

      {
        type: "image",
        src: "images/z440/1.jpg"
      },
      
      {
        type: "image",
        src: "images/z440/2.png"
      },

      {
        type: "image",
        src: "images/z440/3.png"
      },
      
      {
        type: "image",
        src: "images/z440/4.png"
      },
      
    ],

    details: "Z440 workstation equipped with 40GB of RAM, Main SSD for boot and os, 2TB Hard drive for movie and mass storage, 4TB for Immich Photo storage, and a daily mirrored 1.5TB drive to make sure Photos aren't lost.",

    challenges: "Was my first time dealing with Docker. It wasn't too bad, and I eventually realized how great it is. It makes it a lot easier to keep everything organized, and I can easily add new services without having to worry about damaging what I already have.",

    outcome: "I have a server running minecraft servers via Crafty Console, a photo server via Immich with 4TB of storage, Movie Streaming via Jellyfin and Plex, an electronics part Database that is insanely over organized via PartDB, and a multimedia suite via SnapOtter. I have all of this routed through Tailscale, so I can not only safely access all my services outside my home network without port-forwarding, but also use my Z440 as an exit node to act as a VPN when im away, routing my Internet traffic through my home wifi and public IP",

    link: "",

    resources: []
  },

  {
    title: "KDX 200 replacement headlight mount",
    category: "Hardware",
    date: "2026",

    summary: "A replacement headlight mount for a KDX 200 dirtbike, designed in FreeCAD and 3D printed in PLA.",
    media: [
      {
        type: "image",
        src: "images/kdx/1.png"
      },
       {
        type: "image",
        src: "images/kdx/2.png"
      },
         {
        type: "image",
        src: "images/kdx/3.png"
      },

      {
        type: "image",
        src: "images/kdx/4.gif"
      },
      
    ],
    details: "After buying a KDX 200 headlight, it was missing the original bracket that held the light and let it pivot.",
    challenges: "This was my first actual project in FreeCAD, and I had to learn how to use the software to make a part that would fit the light and the bike.",

    outcome: "The bracket has outlived the 39 year old headlight plastic, and has survived a few crashes.",
    link: "",
    resources: []
  },


  

];

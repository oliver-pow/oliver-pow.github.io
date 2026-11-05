
/*
  ADD PROJECTS HERE.

  Copy one project object and paste it after the previous one.

  category should be one of:
  "Electronics", "Software", " ", "Other"

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
    category: "",
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
    category: "Work In Progress",
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
    category: "",
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
    category: "",
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

    {
    title: "Window Jumper Final Project ",
    category: "",
    date: "2026",

    summary: "A game made for the final project in ICS3U. More of a proof of concept rather then a polished game. It makes heavy use of different methods and objects",
    media: [
      {
        type: "image",
        src: "images/windowJumper/1.png"
      }
      
    ],
    details: "A game made in Java using the HSA2 graphics library. It is very unpolished, but the goal of the project was to show that I am able to use different methods and objects to make a game. The game is a simple platformer where the player has to jump from window to window. The game is not finished, but it is a good proof of concept.",
    challenges: "The main challenge I faced while making this game was the amount of time I had to work with. Originally I wanted to make it a lot more polished, including a level editor, proper art, and a lot more levels. However I ran out of time.",

    outcome: "While the game somewhat works, it is not very polished, and I'm unhappy with the final product. There is lots of bugs, and there is basically no levels.",
    link: "https://github.com/oliver-pow/windowJumper.git",
    resources: []
  },
  {
    title: "Arduino Humidity and Temperature Sensor for Vampire crabs",
    category: "",
    date: "2024",
    media: [
      {
        type: "image",
        src: "images/crabs/1.jpeg"
      }
    ],
    details: "It uses a DHT11 humidity and temperature sensor to read the humidity and temperature of the tank, and then uses an Arduino TFT shield to display the readings.",
    challenges: "My cheap TFT used an unusual firmware, so finding documentation on it was hard, but eventually I figured out the library files needed a small tweak.",
    outcome: "For what it needed to do, it worked great. The humidity never really got out of hand, but if it did I was thinking of having a servo that opens and closes the air vent to manage the fresh air it got.",
    summary: "A simple Arduino project that uses a humidity and temperature sensor to make sure the vampire crabs are living in the optimal conditions.",
  },

  {
    summary: "A simple project that converts a standard PS2 keyboard to the proprietary keyboard connector and protocol used by the Macintosh Plus. ",
    title: "PS2 Keyboard to Macintosh Plus Keyboard Adapter",
    category: "",
    date: "2023",
    media: [
      {
        type: "image",
        src: "images/ps2mac/1.png"
      }
    ],
    details: "A simple project that converts a standard PS2 keyboard to the proprietary keyboard connector and protocol used by the Macintosh Plus. I used an Arduino Nano to both read th PS/2 keyboard inputs and convert them to the Macintosh Plus protocol. I made this because my Mac didn't come with a keyboard, and original keyboards are more expensive than the computer itself.",
    challenges: "Fitting the Arduino Nano into they PS/2 keyboard to make it look clean, since all of the programming and logic was already made, it was mostly a soldering task",
      resources: [
      {
        name: "mac-plus-ps2",
        description: "Original GitHub repository for the adapter",
        url: "https://github.com/trekawek/mac-plus-ps2.git"
      }
    ],
    outcome: "The adapter works great, and I can now use my PS/2 keyboard with my Macintosh Plus. The next project is to make a floppy emulator.",
  },

  {
    title: "Commdore 64 Power Supply ",
    summary: "The original power supply for the Commodore 64 is known for failing after all this time. I made a new one from thrift store transformers.",
    category: "",
    date: "2022",
    details: "My original power supply failed after plugging it in for the first time in probably 20 years. The C64 needs both 5V DC for the computer, and 9V AC only needed for some peripherals. I used two second hand transofrmers and wired them to the original power plug. It has worked great ever since, however I need two outlets to power it now.",
    challenges: "Finding a 9V AC transformer was a bit of a challenge, as DC transformers are much more common. I also had to replace one of the ram chips and voltage regulator, I guess they blew at the same time the power supply did, maybe it spiked it with voltage before it died.",
    outcome: "Even though it works, If i were to do it again today I would do it much differently. Instead of using already existing transformers, I would want to learn about making my own power supply, so that it would be more effecient and also so it wouldn't need two seperate plugs.",
    media: [
      {
        type: "image",
        src: "images/commodoreps/1.png"
      }
    ],
  }


  

];

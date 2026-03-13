const fakeCampgrounds = [
  {
    title: "Whispering Pines Camp",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/1/800/600",
    filename: "camp-1.jpg",
    price: 28,
    description: "Nestled among tall pine trees, this serene spot offers peace and fresh mountain air.",
    location: "Asheville, North Carolina, USA",
    reviews: []
  },
  {
    title: "Golden Canyon Retreat",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/2/800/600",
    filename: "camp-2.jpg",
    price: 34,
    description: "A warm desert escape with colorful sunsets and starlit skies over red canyon cliffs.",
    location: "Sedona, Arizona, USA",
    reviews: []
  },
  {
    title: "Crystal Lake Hideaway",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/3/800/600",
    filename: "camp-3.jpg",
    price: 45,
    description: "Camp beside the shimmering lake and wake to the sound of gentle waves and birdsong.",
    location: "Truckee, California, USA",
    reviews: []
  },
  {
    title: "Misty Mountain Basecamp",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/4/800/600",
    filename: "camp-4.jpg",
    price: 31,
    description: "Ideal for hikers and adventurers, surrounded by foggy peaks and lush forest trails.",
    location: "Boulder, Colorado, USA",
    reviews: []
  },
  {
    title: "Cedar Grove Rest",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/5/800/600",
    filename: "camp-5.jpg",
    price: 22,
    description: "A small, cozy campground surrounded by fragrant cedar trees and gentle streams.",
    location: "Portland, Oregon, USA",
    reviews: []
  },
  {
    title: "Blue Horizon Campground",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/6/800/600",
    filename: "camp-6.jpg",
    price: 37,
    description: "Sweeping ocean views, cool breezes, and distant sounds of waves crashing ashore.",
    location: "Big Sur, California, USA",
    reviews: []
  },
  {
    title: "Silver River Bend",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/7/800/600",
    filename: "camp-7.jpg",
    price: 30,
    description: "A riverside getaway perfect for kayaking, fishing, or relaxing under the willow trees.",
    location: "Boise, Idaho, USA",
    reviews: []
  },
  {
    title: "Lone Oak Meadows",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/8/800/600",
    filename: "camp-8.jpg",
    price: 25,
    description: "Spacious open fields surrounded by a single giant oak, ideal for stargazing nights.",
    location: "Austin, Texas, USA",
    reviews: []
  },
  {
    title: "Maple Ridge Camp",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/9/800/600",
    filename: "camp-9.jpg",
    price: 29,
    description: "Enjoy the scent of maple trees and the quiet sounds of rustling leaves in the breeze.",
    location: "Manchester, Vermont, USA",
    reviews: []
  },
  {
    title: "Echo Valley Grounds",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/10/800/600",
    filename: "camp-10.jpg",
    price: 33,
    description: "A wide valley surrounded by rocky walls, where your voice echoes into the wilderness.",
    location: "Moab, Utah, USA",
    reviews: []
  },
  {
    title: "Golden Birch Retreat",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/11/800/600",
    filename: "camp-11.jpg",
    price: 26,
    description: "Peaceful campground framed by bright golden birch trees that shimmer in the sunlight.",
    location: "Ely, Minnesota, USA",
    reviews: []
  },
  {
    title: "Sunset Bluff Camp",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/12/800/600",
    filename: "camp-12.jpg",
    price: 41,
    description: "Panoramic views from atop a rocky bluff — the perfect place to watch sunsets.",
    location: "Santa Fe, New Mexico, USA",
    reviews: []
  },
  {
    title: "Redwood Haven",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/13/800/600",
    filename: "camp-13.jpg",
    price: 47,
    description: "Towering redwoods surround this secluded site, offering tranquility and shade all day.",
    location: "Eureka, California, USA",
    reviews: []
  },
  {
    title: "Coyote Creek Camp",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/14/800/600",
    filename: "camp-14.jpg",
    price: 19,
    description: "A rustic site with a gentle creek and the occasional call of distant coyotes.",
    location: "Flagstaff, Arizona, USA",
    reviews: []
  },
  {
    title: "Willow Springs Base",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/15/800/600",
    filename: "camp-15.jpg",
    price: 27,
    description: "A relaxing spring-fed area lined with willow trees, ideal for family picnics.",
    location: "Bozeman, Montana, USA",
    reviews: []
  },
  {
    title: "Pine Hollow Retreat",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/16/800/600",
    filename: "camp-16.jpg",
    price: 35,
    description: "Hidden within pine hollows, this site offers both privacy and scenic beauty.",
    location: "Coeur d'Alene, Idaho, USA",
    reviews: []
  },
  {
    title: "Crescent Beach Camp",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/17/800/600",
    filename: "camp-17.jpg",
    price: 43,
    description: "A stunning coastal campsite along a crescent-shaped beach with soft white sand.",
    location: "Cape Cod, Massachusetts, USA",
    reviews: []
  },
  {
    title: "Hidden Brook Valley",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/18/800/600",
    filename: "camp-18.jpg",
    price: 32,
    description: "Tucked away in a quiet valley, a brook flows beside tents and campfire spots.",
    location: "Fayetteville, Arkansas, USA",
    reviews: []
  },
  {
    title: "Starfield Flats",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/19/800/600",
    filename: "camp-19.jpg",
    price: 20,
    description: "Open plains perfect for watching meteor showers under clear night skies.",
    location: "Laramie, Wyoming, USA",
    reviews: []
  },
  {
    title: "Fern Hollow Camp",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/20/800/600",
    filename: "camp-20.jpg",
    price: 38,
    description: "Cool, shady ferns carpet the forest floor around this peaceful woodland site.",
    location: "Olympia, Washington, USA",
    reviews: []
  },
  {
    title: "Silver Bay Campsite",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/21/800/600",
    filename: "camp-21.jpg",
    price: 24,
    description: "Camp near the glistening water of Silver Bay — perfect for a weekend retreat.",
    location: "Traverse City, Michigan, USA",
    reviews: []
  },
  {
    title: "Bear Ridge Campground",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/22/800/600",
    filename: "camp-22.jpg",
    price: 36,
    description: "A rugged mountain site known for its wildlife and breathtaking ridge views.",
    location: "Anchorage, Alaska, USA",
    reviews: []
  },
  {
    title: "Morning Dew Camp",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/23/800/600",
    filename: "camp-23.jpg",
    price: 27,
    description: "Wake up to morning dew sparkling on the grass in this tranquil meadow spot.",
    location: "Burlington, Vermont, USA",
    reviews: []
  },
  {
    title: "Thunder Creek Hollow",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/24/800/600",
    filename: "camp-24.jpg",
    price: 44,
    description: "A hidden gem where a roaring creek carves through dramatic forested cliffs.",
    location: "Helena, Montana, USA",
    reviews: []
  },
  {
    title: "Riverstone Campground",
    author: "68d89f29c6ee8c9453ffe35e",
    image: "https://picsum.photos/seed/25/800/600",
    filename: "camp-25.jpg",
    price: 29,
    description: "Riverside camping spot with smooth stone beaches and peaceful current sounds.",
    location: "Bend, Oregon, USA",
    reviews: []
  }
];


module.exports = fakeCampgrounds;


const images = [
  "https://picsum.photos/200/300",
"https://picsum.photos/300/200",
"https://picsum.photos/400/300",
"https://picsum.photos/250/350",
"https://picsum.photos/300/400",
"https://picsum.photos/350/250",
"https://picsum.photos/450/350",
"https://picsum.photos/500/300",
"https://picsum.photos/300/500",
"https://picsum.photos/400/400",
"https://picsum.photos/350/300",
"https://picsum.photos/300/350",
"https://picsum.photos/200/200",
"https://picsum.photos/250/250",
"https://picsum.photos/300/300",
];

function GalleryPage() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 text-indigo-700 min-h-screen py-12">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Gallery Item ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;

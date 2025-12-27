📘 Sunbird Education Center – Official Website

A fully responsive, modern, and futuristic school website built using React (TypeScript) and Tailwind CSS, designed for performance, modularity, and easy content editing.

This project includes a complete set of pages typically required for an educational institution—Home, About, Gallery, Academic Calendar, Downloads, and Contact—along with a shared blue header, dark footer, animations, and dynamic background images.

🚀 Tech Stack

React (TSX)

TypeScript

Tailwind CSS

React Router

CSS Transitions + Tailwind Animations

Lazy-loaded Images

Reusable Components & Clean Architecture

📂 Project Structure src/ ├── assets/ │ ├── background-images/ # Background slider images (SAMPLE) │ └── gallery/ # Gallery sample images ├── components/ │ ├── Header.tsx │ ├── Footer.tsx │ ├── Hero.tsx │ ├── ImageSlider.tsx │ ├── ContactForm.tsx │ ├── MapEmbed.tsx │ └── UI components... ├── pages/ │ ├── Home.tsx │ ├── About/ │ │ ├── AboutIndex.tsx │ │ ├── PrincipalsDesk.tsx │ │ ├── ManagersDesk.tsx │ │ ├── AboutSchool.tsx │ │ ├── Facility.tsx │ │ ├── Achievement.tsx │ │ └── VisionMission.tsx │ ├── Gallery.tsx │ ├── Calendar.tsx │ ├── Contact.tsx │ └── Downloads.tsx ├── data/ │ ├── sampleContent.ts # All SAMPLE text, images & contact info │ └── calendar.ts # Academic calendar sample data ├── layouts/ │ └── MainLayout.tsx # Shared header + footer wrapper └── App.tsx

🎨 UI Features ✔ Header

Blue theme

Logo + school name

Phone number, email, address

Stays the same across all pages

✔ Footer

Dark/Black theme

Contact form

Social media icons

Google Map embed

Same on all pages

✔ Home Page Highlights

Clean hero section with transparent foreground overlay

Background image slider (4–5 rotating images with fade effect)

Academic session

Achievements

Principal & Manager desk preview

Facilities grid (labs, CCTV, library etc.)

Photo gallery preview

Vision, Mission & Values

✔ About Section

Multiple subpages:

Principal’s Desk

Manager’s Desk

About School

Facilities

Achievements

Vision, Mission & Values

✔ Gallery

Event-based galleries (Independence Day, Trips, Annual Day, etc.)

Modal viewer with slideshow

✔ Academic Calendar

Session from April to March

Follows Indian holidays & school event style

Export/Print button

✔ Contact Page

Query form

Full contact details

Map

Social media

✔ Downloads Page

Fee structure

Certificates

Other important documents

🛠 Installation

Clone the project:

git clone cd sunbird-education-center

Install dependencies:

npm install

Run in development:

npm run dev

Build for production:

npm run build

Preview the production build:

npm run preview

🧩 Editing Content (Very Important)

All editable content is stored in:

src/data/sampleContent.ts

You can update:

School name

Address

Phone & email

Social media links

Sample images

School details

Vision, Mission & Values

Principal/Manager info

Replace Background Slider Images

Add all hero images in:

src/assets/background-images/

Then update their file names inside ImageSlider.tsx.

🎞 Background Image Slider (Hero)

Uses 4–5 images

Auto-play with fade transitions

Transparent overlay for cleaner visuals

Fully responsive

No layout changes needed

🏫 Class Range Update

The website reflects: Classes: LKG to 8th You can modify this only in the content file if needed.

📱 Responsiveness & Performance

Fully mobile-friendly

Lazy-loading of gallery images

Code-splitting using React Router

Lightweight animations for smooth UX

📌 Notes

All demo text, photos, and PDFs are marked as SAMPLE, and you can replace them easily.

Google Maps iframe is also located in MapEmbed.tsx with a placeholder link.

🧪 Testing

Includes 1 sample test (editable):

Verifies header renders phone number.

Run tests:

npm run test

🤝 Contributing

Feel free to add pages, improve UI, or enhance functionality.

📜 License

This project is provided for school website development and educational purposes. Modify freely as required
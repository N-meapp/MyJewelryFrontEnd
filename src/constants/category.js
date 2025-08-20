import menGif from '../../public/assets/Videos/mensection-gif.gif'
import kidsGif from '../../public/assets/Videos/kidssection-gif.gif'
import womenGif from '../../public/assets/Videos/womensection-gif.gif'

export const mensCategory ={
    heading:'Get the Look',
    description:'Elevate your style with our exquisite gold jewelry, perfectly curated to complement any look. Discover timeless pieces that add elegance and sophistication to every occasion.',
    video:menGif,
}

export const kidsCategory ={
    heading:'Get the Look',
    description:'Elevate your style with our exquisite gold jewelry, perfectly curated to complement any look. Discover timeless pieces that add elegance and sophistication to every occasion.',
    video: kidsGif,
}

export const womensCategory ={
  heading:'Get the Look',
  description:'Elevate your style with our exquisite gold jewelry, perfectly curated to complement any look. Discover timeless pieces that add elegance and sophistication to every occasion.',
  video: womenGif,
}

export const navCategory = [
    {
      index: 1,
      image: "/assets/Images/category/all.png",  // Corrected image path
      title: "All Jewelry"
    },
    {
      index: 2,
      image: "/assets/Images/category/2.png",
      title: "Gold"
    },
    {
      index: 3,
      image: "/assets/Images/category/3.png",
      title: "Diamond"
    },
    {
      index: 4,
      image: "/assets/Images/category/4.png",
      title: "Silver"
    },
    {
      index: 5,
      image: "/assets/Images/category/5.png",
      title: "Wedding"
    },
    {
      index: 6,
      image: "/assets/Images/category/6.png",
      title: "Handcrafted"
    },
    {
      index: 7,
      image: "/assets/Images/category/7.png",
      title: "Daily Wear"
    },
    {
      index: 8,
      image: "/assets/Images/category/8.png",
      title: "Gemstone"
    },
    {
      index: 9,
      image: "/assets/Images/category/all.png",
      title: "All Jewelry"
    },
  ];
  

  export const categorySubData = [
    {
      id: 1,
      title: 'All Jewellery',  // Match with 'All Jewelry' from navCategory
      image: '/icons/jewel.svg',
      description: 'Elegant handcrafted gold jewelry.',
      mega: {
        Category: [
          { id: 1, label: 'All Jewellery', icon: '/public/assets/Images/subcategory/1.png' },
          { id: 2, label: 'Bangles', icon: '/public/assets/Images/subcategory/1.png' },
          { id: 3, label: 'Nose Pin', icon: '/public/assets/Images/subcategory/1.png' },
          { id: 4, label: 'Finger Rings', icon: '/public/assets/Images/subcategory/1.png' },
          { id: 5, label: 'All Jewellery', icon: '/public/assets/Images/subcategory/1.png' },
          { id: 6, label: 'Bangles', icon: '/public/assets/Images/subcategory/1.png' },
          { id: 7, label: 'Finger Rings', icon: '/public/assets/Images/subcategory/1.png' },
          { id: 8, label: 'All Jewellery', icon: '/public/assets/Images/subcategory/1.png' },
          { id: 9, label: 'Bangles', icon: '/public/assets/Images/subcategory/1.png' },
        ],
        Occasions: [
          { id: 1, label: 'Office wear', icon: '/public/assets/Images/subcategory/occasions/o1.png' },
          { id: 2, label: 'Casual wear', icon: '/public/assets/Images/subcategory/occasions/o2.png' },
          { id: 3, label: 'Modern wear', icon: '/public/assets/Images/subcategory/occasions/o3.png' },
          { id: 4, label: 'Traditional wear', icon: '/public/assets/Images/subcategory/occasions/o4.png' },
        ],
        Price: [
          { id: 1, label: '<25Kkkk', icon: '/public/assets/Images/subcategory/rate/r1.png' },
          { id: 2, label: '25K - 50K', icon: '/public/assets/Images/subcategory/rate/r2.png' },
          { id: 3, label: '50K - 1L', icon: '/public/assets/Images/subcategory/rate/r3.png' },
          { id: 4, label: '1L & Above', icon: '/public/assets/Images/subcategory/rate/r4.png' },
        ],
        Gender: [
          { id: 1, label: 'Women', icon: '/public/assets/Images/subcategory/gender/f.png' },
          { id: 2, label: 'Men', icon: '/public/assets/Images/subcategory/gender/m.png' },
          { id: 3, label: 'Kid', icon: '/public/assets/Images/subcategory/gender/k.png' },
        ]
      }
    },

    {
        id: 2,
        title: 'Gold',  // Match with 'All Jewelry' from navCategory
        image: '/icons/jewel.svg',
        description: 'Elegant handcrafted gold jewelry.',
        mega: {
          Category: [
            { id: 1, label: 'All Jewellery', icon: '/icons/jewel.svg' },
            { id: 2, label: 'Bangles', icon: '/icons/jewel.svg' },
          ],
          Occasions: [
            { id: 3, label: 'Wedding', icon: '/icons/jewel.svg' },
          ],
          Price: [
            { id: 4, label: 'Under ₹5000', icon: '/icons/jewel.svg' },
          ],
          Gender: [
            { id: 5, label: 'Women', icon: '/icons/jewel.svg' },
          ]
        }
      },
  ];
  
  
  


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './gallery.css';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Appetizers', value: 'appetizer' },
  { label: 'Main Course', value: 'main_course' },
  { label: 'Sides and Salads', value: 'sides_salad' },
  { label: 'Desserts', value: 'dessert' },
  { label: 'Beverages', value: 'beverage' },
];

const galleryData = [
  // Appetizers
  { src: 'https://revelmaine.com/cdn/shop/products/IMG_8494_720x.jpg?v=1648519329', alt: 'Crudité', category: 'appetizer' },
  { src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/12/5/secret-ingredient-board-with-white-wine.jpg.rend.hgtvcom.616.411.suffix/1701794426344.jpeg', alt: 'Food Board', category: 'appetizer' },
  { src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/11/17/fn_mezze-board-s4x3.jpg.rend.hgtvcom.791.594.suffix/1700505559832.jpeg', alt: 'Charcuterie Board', category: 'appetizer' },
  { src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/9/23/2/FNM_110114-Bacon-Wrapped-Shrimp-Recipe_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1412610508358.jpeg', alt: 'Bacon Wrapped Shrimp', category: 'appetizer' },

  // Main Course
  { src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Pineapple-Honey-Glazed-Ham_H_s4x3.jpg.rend.hgtvcom.791.594.suffix/1568735449497.jpeg', alt: 'Pineapple-Honey-Glazed-Ham', category: 'main_course' },
  { src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/11/11/0/FNK_Classic-Crown-Roast-H-0345_s4x3.jpg.rend.hgtvcom.791.594.suffix/1573495954078.jpeg', alt: 'Classic-Crown-Roast', category: 'main_course' },

  // Sides and Salads
  { src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/12/18/0/WUSP01H_burgundy-mushrooms_s4x3.jpg.rend.hgtvcom.791.594.suffix/1382546116607.jpeg', alt: 'Burgundy-Mushrooms', category: 'sides_salad' },

  // Desserts
  { src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/5/0/5227911_FN_Holiday-2018_Christmas-Tree-Cake-_4X3.jpg.rend.hgtvcom.791.594.suffix/1538777241478.jpeg', alt: 'Christmas-Tree-Cake', category: 'dessert' },

  // Beverages
  { src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/22/0/FNK_SANTA-CLAUS-CRANBERRY-PUNCH-H_s4x3.jpg.rend.hgtvcom.791.594.suffix/1540223504529.jpeg', alt: 'Santa-Punch', category: 'beverage' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '' });

  const filteredImages = galleryData.filter(
    img => filter === 'all' || img.category === filter
  );

  return (
    <section id="gallery container" className="gallery-section">
      <h1 className="gallery-title">Khana food Gallery 🤤</h1>

      <ul className="gallery-tabs">
        {categories.map(tab => (
          <motion.li
            key={tab.value}
            className={`gallery-tab ${filter === tab.value ? 'gallery-tab-active' : ''}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setFilter(tab.value)}
          >
            {tab.label}
          </motion.li>
        ))}
      </ul>

      <div className='container'>
        <motion.div
          className="gallery-items-wrapper"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                className="gallery-item"
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  className="gallery-image"
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setLightbox({ isOpen: true, src: img.src })}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            className="lightbox lightbox-open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox({ isOpen: false, src: '' })}
          >
            <motion.div
              className="lightbox-wrapper"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="lightbox-content">
                <img className="lightbox-image" src={lightbox.src} alt="lightbox-img" />
              </motion.div>
            </motion.div>

            <motion.div className="lightbox-close" onClick={() => setLightbox({ isOpen: false, src: '' })}>
              <span></span>
              <span></span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

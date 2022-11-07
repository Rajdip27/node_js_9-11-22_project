var express = require('express');
var router = express.Router();
const BlogController=require('../controlers/blogControler.js');
const ContactContorller = require('../controlers/contactController.js');
const LinkContorller = require('../controlers/linkController.js');
const TeamContorller = require('../controlers/teamController.js');
const TestimonialController = require('../controlers/testimonialController.js')

/* GET home page. */

//blog
router.get('/blogs', BlogController.index);
router.get('/blog/create', BlogController.create);
router.get('/blog/:id/edit', BlogController.edit);
router.delete('/blog/:id/delete', BlogController.delete);
router.get('/blog/:id/show', BlogController.show);
router.post('/blog/store', BlogController.store);
router.put('/blog/:id/update',BlogController.update);

// team
/* GET contact-us page. */
router.get('/contact', ContactContorller.index);

router.get('/contact/create', ContactContorller.create);

router.get('/contact/edit', ContactContorller.edit);

router.delete('/contact/delete', ContactContorller.delete);

router.get('/contact/show', ContactContorller.show);

router.post('/contact/store', ContactContorller.store);

router.put('/contact/update',ContactContorller.update);

/* GET Link page. */
router.get('/links', LinkContorller.index);

router.get('/link/create', LinkContorller.create);

router.get('/link/edit', LinkContorller.edit);

router.delete('/link/delete', LinkContorller.delete);

router.get('/link/show', LinkContorller.show);

router.post('/link/store', LinkContorller.store);

router.put('/link/update', LinkContorller.update);


/* GET Team page. */
router.get('/team', TeamContorller.index);

router.get('/team/create', TeamContorller.create);

router.get('/team/edit', TeamContorller.edit);

router.delete('/team/delete', TeamContorller.delete);

router.get('/team/show', TeamContorller.show);

router.post('/team/store', TeamContorller.store);

router.put('/team/update', TeamContorller.update);
/* GET Testimonial page. */
router.get('/testimonial', TeamContorller.index);

router.get('/testimonial/create', TestimonialController.create);

router.get('/testimonial/edit', TestimonialController.edit);

router.delete('/testimonial/delete', TestimonialController.delete);

router.get('/testimonial/show', TestimonialController.show);

router.post('/testimonial/store', TestimonialController.store);

router.put('/testimonial/update',TestimonialController.update);






module.exports = router;

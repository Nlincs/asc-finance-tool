const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'care-type-answer'
router.post('/care-type-answers', function (req, res) {

    // Make a variable and give it the value from 'care-type'
    var type = req.session.data['what-type-of-care']
    // Check whether the variable matches a condition
    if (type == "Care at home"){
    // Send user to capital-care-at-home.html
    res.redirect('/capital-care-at-home')
    }
    else if (type == "Residential care/Nursing home" ){
   // Send user to /property.html
   res.redirect('/property')
    }
 })

// Run this code when a form is submitted to 'capital-care-at-home-answers'
 router.post('/capital-care-at-home-answers', function (req, res) {

   // Make a variable and give it the value from 'how-many-balls'
  var capital = req.session.data['how-much-capital-do-you-have']
  var type = req.session.data['what-type-of-care']
  var owners = req.session.data['home-ownership']
  // Check whether the variable matches a condition
  if (capital == "More than £23,250" ){
    // Send user to self-fund.html
    res.redirect('/self-fund')
  } else if (capital == "Between £14,250 and £23,250" ){
    // Send user to tariff-income.html
    res.redirect('/tariff-income')
  } else if (capital == "Between £0 and £14,250" ){
    // Send user to financial-support.html
    res.redirect('/financial-support')
  } 

})

 // Run this code when a form is submitted to 'capital-answers'
 router.post('/capital-answers', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var capital = req.session.data['how-much-capital-do-you-have']
  var type = req.session.data['what-type-of-care']
  var owners = req.session.data['home-ownership']
  // Check whether the variable matches a condition
  if (capital == "More than £23,250" ){
    // Send user to self-fund-residential-not-owned.html
    res.redirect('/self-fund-residential-not-owned')
  } else if (capital == "Between £14,250 and £23,250" ){
    // Send user to tariff-income-no-housing.html
    res.redirect('/tariff-income-no-housing')
  } else if (capital == "Between £0 and £14,250" ){
    // Send user to financial-support-no-housing.html
    res.redirect('/financial-support-no-housing')
  } 

})


 // Run this code when a form is submitted to 'property-answers'
  router.post('/property-answers', function (req, res) {

    // Make a variable and give it the value from 'property'
    var owners = req.session.data['home-ownership']
    // Check whether the variable matches a condition
    if (owners == "Yes"){
      // Send user to self-fund-residential.html
      res.redirect('/self-fund-residential')
    } else if (owners == "No"){
      // Send user to /capital.html
      res.redirect('/capital')
    }
  })
module.exports = router

'use strict';

$('#navbarDropdownMenuLink').click(() => {
    $('#navbarDropdownMenu').slideToggle();
});

var Aled = new Date()
$('#js-current-year').html("<p>"+Aled.getFullYear()+"</p>")

$('#js-bmi-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const weight = $('#js-bmi-weight').val();
    const weightnbr = Number(weight);
    const height = $('#js-bmi-height').val();
    const heightnbr = Number(height);
    const BMI = weightnbr / (heightnbr / 100 * heightnbr / 100);
    if (isNaN(BMI)){

    } else {
        if (BMI < 18.5){
            $('#results').addClass('alert-warning');
            $('#results').html('<p>Considered underweight</p>')
        } else if (BMI >= 18.5 && BMI < 25){
            $('#results').html('<p>Ok</p>')
            $('#results').addClass('alert-primary');
        } else {
            $('#results').addClass('alert-warning');
            $('#results').html('<p>Considered overweight</p>')
        }
    }
});

const bmiFacts = [
    {
      title: 'Future weight of children can be anticipated by BMI',
      description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
      img: 'http://lorempixel.com/200/200/cats'
    },
    {
      title: 'Losing BMI weight lowers the risk of diabetes',
      description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
      img: 'http://lorempixel.com/200/200/sports'
    },
    {
      title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
      description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
      img: 'http://lorempixel.com/200/200/fashion'
    },
    {
      title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
      description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
      img: 'http://lorempixel.com/200/200/food'
    },
  ];

// 1. parcourir le tableau
// 2. créer un div avec le createElement
// 3. insérer le html fourni dans le div créé
// 4. sélectionner le div où vous voulez insérer le div créé
// 5. insérer le div dans la page

bmiFacts.forEach((element, index) => {
    var index = document.createElement('div');
    index.innerHTML = bmiFacts[index];
});
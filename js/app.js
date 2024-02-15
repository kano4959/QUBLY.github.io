const sr = ScrollReveal({
    distance: '100px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.animation-top', {delay: 300, origin:'top'});
sr.reveal('.animation-left', {delay: 300, origin:'left'});
sr.reveal('.animation-right', {delay: 300, origin:'right'});
sr.reveal('.animation-bottom', {delay: 300, origin:'bottom'});
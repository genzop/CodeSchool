var appointmentsView = new AppointmentListView({collection: appointmentList});
$('#app').html(appointmentsView.render().el);
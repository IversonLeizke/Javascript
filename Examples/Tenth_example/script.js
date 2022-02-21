'strict mode';

// "OR assignment operator" assign an value to the variable if the value of the variable is false
// If the value alreay exist and it is zero then as zero in considered a false value a new one will be passed
const restaurat = {
    name: 'La Piazza',
    numReservations: 0,
    owner: 'Giovanni Rossi',
};

restaurat.numGuest ||= 10;

// The nullish operator just check if the value is null or undefinied
restaurat.numReservations ??= 20;

// Check if the value is true and if it is the value will be chaged
restaurat.owner &&= 'anonymous';

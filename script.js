window.onload = function() {
    function drawGraph(ctx, data, color) {
        ctx.beginPath();
        ctx.moveTo(0, 30); // Start at the bottom left
        data.forEach(point => ctx.lineTo(point.x, point.y));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw dots
        ctx.beginPath();
        data.forEach(point => {
            ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        });
        ctx.fillStyle = color;
        ctx.fill();
    }

    // Data for each patient
    const patientData = [
        {
            emg: [{x: 0, y: 30}, {x: 30, y: 18}, {x: 60, y: 12}],
            rom: [{x: 0, y: 30}, {x: 30, y: 21}, {x: 60, y: 12}],
            emgColor: '#37DD0D', // Green
            romColor: '#DF0101', // Red
            emgCanvasId: 'emgGraph1',
            romCanvasId: 'romGraph1'
        },
        {
            emg: [{x: 0, y: 30}, {x: 30, y: 22}, {x: 60, y: 20}],
            rom: [{x: 0, y: 30}, {x: 30, y: 19}, {x: 60, y: 15}],
            emgColor: '#37DD0D', // Green
            romColor: '#DF0101', // Red
            emgCanvasId: 'emgGraph2',
            romCanvasId: 'romGraph2'
        },
        // Add more patient data here as needed
    ];

    patientData.forEach((patient, index) => {
        const emgCtx = document.getElementById(patient.emgCanvasId).getContext('2d');
        const romCtx = document.getElementById(patient.romCanvasId).getContext('2d');

        drawGraph(emgCtx, patient.emg, patient.emgColor);
        drawGraph(romCtx, patient.rom, patient.romColor);
    });
};

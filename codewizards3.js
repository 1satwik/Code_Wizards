let loggedIn = false; 

function showLoginFields() {
    const role = document.getElementById("role").value;
    if (role === "doctor") {
        document.getElementById("doctor-login").style.display = 'block';
        document.getElementById("patient-login").style.display = 'none';
    } else {
        document.getElementById("patient-login").style.display = 'block';
        document.getElementById("doctor-login").style.display = 'none';
    }
}

async function login() {
    const role = document.getElementById("role").value;
    let id = '';
    if (role === 'doctor') {
        id = document.getElementById("doctor-id").value;
    } else {
        id = document.getElementById("patient-id").value;
    }

    if (!id) {
        document.getElementById("error-message").style.display = 'block';
        return;
    }

    // Simulate successful login (replace with real API call for production)
    loggedIn = true;
    document.getElementById("login-container").style.display = 'none';
    document.getElementById("dashboard").style.display = 'block';
}

function logout() {
    loggedIn = false;
    document.getElementById("login-container").style.display = 'block';
    document.getElementById("dashboard").style.display = 'none';
}

function goBack() {
    document.getElementById("patient-registration").style.display = 'none';
    document.getElementById("appointment-booking").style.display = 'none';
    document.getElementById("patient-records").style.display = 'none';
    document.getElementById("diagnosis-input").style.display = 'none';
    document.getElementById("prescription-management").style.display = 'none';
    document.getElementById("traffic-tracker").style.display = 'none';
    document.getElementById("dashboard").style.display = 'block';
}

function showRegisterPatient() {
    document.getElementById("dashboard").style.display = 'none';
    document.getElementById("patient-registration").style.display = 'block';
}

function savePatient() {
    alert("Patient Registered Successfully!");
    goBack();
}

function showBookAppointment() {
    document.getElementById("dashboard").style.display = 'none';
    document.getElementById("appointment-booking").style.display = 'block';
}

function confirmAppointment() {
    const doctorName = document.getElementById("doctor-name").value;
    const appointmentDate = document.getElementById("appointment-date").value;

    if (doctorName && appointmentDate) {
        document.getElementById("appointment-status").innerText = "Appointment Confirmed!";
    } else {
        document.getElementById("appointment-status").innerText = "Doctor is not available at this time.";
    }
}

function showViewPatientRecords() {
    document.getElementById("dashboard").style.display = 'none';
    document.getElementById("patient-records").style.display = 'block';
}

function searchPatient() {
    const patientId = document.getElementById("search-patient").value;
    // Simulate retrieving patient data (replace with actual data fetching)
    document.getElementById("patient-info").innerText = `Patient Info for ID: ${patientId}`;
}

function showDiagnosisInput() {
    document.getElementById("dashboard").style.display = 'none';
    document.getElementById("diagnosis-input").style.display = 'block';
}

function saveDiagnosis() {
    const diagnosisText = document.getElementById("diagnosis-text").value;
    alert("Diagnosis Saved Successfully!");
    goBack();
}

function showPrescriptionManagement() {
    document.getElementById("dashboard").style.display = 'none';
    document.getElementById("prescription-management").style.display = 'block';
}

function sendPrescription() {
    const prescriptionText = document.getElementById("prescription-text").value;
    alert("Prescription Sent to Pharmacy/Patient!");
    goBack();
}

function showTrafficTracker() {
    document.getElementById("dashboard").style.display = 'none';
    document.getElementById("traffic-tracker").style.display = 'block';
}

function trackTraffic() {
    alert("Checking Traffic... (Simulated)");

    // Simulate traffic check (replace with real traffic checking API)
    document.getElementById("traffic-info").innerText = "Traffic Detected! Redirecting you to another route.";
    window.open("https://www.google.com/maps/@13.0220032,77.5716864,3394m/data=!3m1!1e3!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D", "_blank");
}

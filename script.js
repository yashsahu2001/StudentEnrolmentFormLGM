// Select the elements
const enrollmentForm = document.getElementById('enrollmentForm');
const displayData = document.getElementById('displayData');
const enrollButton = document.getElementById('enrollButton');
const clearButton = document.getElementById('clearButton');

// Function to display the enrolled student's data
function displayEnrolledStudentData(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const imageLink = document.getElementById('imageLink').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = document.getElementById('skills').value;

    // Create a new div to display the data
    const enrolledStudentDataDiv = document.createElement('div');
    enrolledStudentDataDiv.innerHTML = `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website Link:</strong> <a href="${website}" target="_blank">${website}</a></p>
        <p><strong>Image Link:</strong> <a href="${imageLink}" target="_blank">${imageLink}</a></p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    displayData.appendChild(enrolledStudentDataDiv);

    // Clear the form fields after enrollment
    enrollmentForm.reset();
}

// Function to clear the form fields
function clearFormFields() {
    enrollmentForm.reset();
}

// Add event listener to the "Enroll Student" button
enrollButton.addEventListener('click', displayEnrolledStudentData);

// Add event listener to the "Clear Form" button
clearButton.addEventListener('click', clearFormFields);

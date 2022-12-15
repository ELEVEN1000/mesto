const profileButtonEdit = document.querySelector(".profile__button-edit");
const popupEditing = document.querySelector(".popup");
const popupButtonClose = document.querySelector(".popup__close-button");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__profession");

const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_job");

function popupOpened() {
  popupEditing.classList.add(`popup_open`);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

function closePopup(popup) {
  popup.classList.remove("popup__open");
}

function openPopup(popup) {
  popup.classList.add("popup__open");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditing);
}
popupButtonClose.addEventListener("click", () => {
  closePopup(popupEditing);
});

profileButtonEdit.addEventListener("click", (event) => {
  event.preventDefault();
  openPopup(popupEditing);
});

profileButtonEdit.addEventListener(`click`, popupOpened);

formElement.addEventListener(`submit`, formSubmitHandler);

import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Slide from "@material-ui/core/Slide"
import Snackbar from "@material-ui/core/Snackbar"
import { ContactFormValues } from "../utils/contact"
import { FormikActions } from "formik"
import ContactForm from "./Contact/Form"
import { stringify } from "query-string"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import DefaultButton from "./Button"
import ModalHeader from "./Contact/ModalHeader"

const useStyles = makeStyles(() =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
)

const SModalContent = styled.div`
  min-width: 300px;
  padding: 0.5rem 1rem 1.5rem;
  background: #f9f9f9;
`

interface Props {}

const Contact: React.FC<Props> = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [snackbar, setSnackbar] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleFormSubmit = (
    values: ContactFormValues,
    { setSubmitting }: FormikActions<ContactFormValues>
  ) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: stringify({ "form-name": "contact", ...values }),
    })
      .then(() => {
        setSubmitting(false)
        setOpen(false)
        setSnackbar(true)
      })
      .catch(error => alert(error))
  }

  const handleSnackbarClose = () => setSnackbar(false)

  return (
    <>
      <Modal
        closeAfterTransition
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <div>
            <ModalHeader title="Contact" onButtonClick={handleClose} />
            <SModalContent>
              <ContactForm onSubmit={handleFormSubmit} />
            </SModalContent>
          </div>
        </Slide>
      </Modal>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <SnackbarContent
          style={{ background: "#2ECC40" }}
          message="Thank you! I will get back to you as soon as I can."
        />
      </Snackbar>

      <div style={{ display: "none" }}>
        <ContactForm onSubmit={() => {}} />
      </div>

      <DefaultButton label="contact" onClick={handleOpen} />
    </>
  )
}

export default Contact

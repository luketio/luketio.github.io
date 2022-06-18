import pdf from "/resume/resume.pdf";

export async function get() {
  return {
    status: 200,
	headers: {
		"Content-type" : "application/pdf",
	},
    body: {
      pdf
    }
  }
}

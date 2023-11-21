import { useQuery } from "@tanstack/react-query"

import { Template } from "../api/generated"

const useTemplateQuery = () => {
  const fetchTemplate = async (): Promise<Template[]> => {
    const res = await fetch("http://localhost:3001/templates/getTemplate")
    return res.json()
  }

  return useQuery({
    queryKey: ["template"],
    queryFn: async () => await fetchTemplate(),
  })
}

export default useTemplateQuery

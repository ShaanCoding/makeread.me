import { useQuery } from "@tanstack/react-query"

import { SidebarResponse } from "../api/generated"

const useSidebarQuery = () => {
  const fetchSideBar = async (): Promise<SidebarResponse> => {
    const res = await fetch("http://localhost:3001/templates/getSidebar")
    return res.json()
  }

  return useQuery({
    queryKey: ["template"],
    queryFn: async () => await fetchSideBar(),
  })
}

export default useSidebarQuery

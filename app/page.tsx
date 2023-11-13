'use client'
import CatsContainer from "@/modules/Cats/containers/CatsContainer";
import Loader from "@/components/Loader";
import {useSelector} from "react-redux";
import {catsLoadingSelector} from "@/modules/Cats/store/cats/selectors";
export default function Home() {

  const loadingState = useSelector(catsLoadingSelector)
  return (
      <main id="root" className="flex min-h-screen flex-col items-center justify-between p-24">
        <CatsContainer />
        {loadingState && <Loader/>}
      </main>
  )
}

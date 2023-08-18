// import { TravelRecord, getTravelRecord } from 'api/backendApi'
// import { useIdToken } from 'hooks/useIdToken'
import React, { useState, useEffect } from 'react'
import { useGetTravelRecord } from '~/api/photolipComponents'
import { TravelRecord } from '~/api/photolipSchemas'
import { useIdToken } from '~/hooks/useIdToken'

type UseTravelListReturn = {
  travelList: TravelRecord[]
  setTravelList: React.Dispatch<React.SetStateAction<TravelRecord[]>>
}

/**
 * travelRecordの一覧を取得するフック
 *
 * @return {UseTravelListReturn}
 */
export const useTravelList = (): UseTravelListReturn => {
  const [travelList, setTravelList] = useState<TravelRecord[]>([])
  const { idToken } = useIdToken()
  useEffect(() => {
    const fetchTravelRecord = async () => {
      const {data: travelRecord} = await useGetTravelRecord({ headers: {
        Authorization: `Bearer ${idToken}`
      } })
      setTravelList(travelRecord ?? [])
    }

    if (!idToken) {
      return
    }
    fetchTravelRecord()
  }, [idToken])

  return { travelList, setTravelList }
}

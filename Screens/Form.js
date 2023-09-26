import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  SafeAreaView,
  useWindowDimensions,
  LogBox,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  ScrollableTabView,
  ScrollableTabBar,
} from "@valdio/react-native-scrollable-tabview";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import Footer from "./Footer";
import "../Tools/global";
import GeneralInfo from "../Components/GeneralInfo";
import HouseHold from "../Components/HouseHold";
import GeneralEco from "../Components/GeneralEco";
import GeneralHealth from "../Components/GeneralHealth";
import WaterSupply from "../Components/WaterSupply";
import { useEffect, useState } from "react";
import Drainage from "../Components/Drainage";
import WasteWater from "../Components/WasteWater";
import SolidWaste from "../Components/SolidWaste";
import RoadTransport from "../Components/RoadTransport";
import Others from "../Components/Others";
import Park from "../Components/Park";
export default function Form({ route }) {
  LogBox.ignoreAllLogs();
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const user_Id = global.user_id;
  const GeneralEntry = global.GeneralEntry;
  const HouseholdEntry = global.HouseholdEntry;
  const GenEcoEntry = global.GenEcoEntry;
  const GenHealthEntry = global.GenHealthEntry;
  const WaterSupplyApi = global.WaterSupplyApi;
  const DrainageApi = global.DrainageApi;
  const WasteWaterApi = global.WasteWaterApi;
  const SolidWasteApi = global.SolidWasteApi;
  const TransportApi = global.TransportApi;
  const ParkApi = global.ParkApi;
  const OtherApi = global.OtherApi;
  const DocUploadApi = global.DocUploadApi;

  const { lat } = route.params;
  const { long } = route.params;

  const [currentDate, setCurrentDate] = useState("");
  const [distHq, setDistHq] = useState("-");
  const [colony, setColony] = useState("-");
  const [ward, setWard] = useState("0");
  const [HouseNo, setHouseNo] = useState("-");

  const [RespondentName, setRespondentName] = useState("-");
  const [HohRelation, setHohRelation] = useState("0");
  const [HohName, setHohName] = useState("-");
  const [Gender, setGender] = useState("0");
  const [MobileNo, setMobileNo] = useState("-");
  const [ProofType, setProofType] = useState("0");
  const [ProofNo, setProofNo] = useState("-");
  const [sCategory, setSCategory] = useState("0");
  const [TribeName, setTribeName] = useState("-");
  const [Vulnerability, setVulnerability] = useState("0");
  const [VulnerabilityOther, setVulnerabilityOther] = useState("-");
  const [FamilyType, setFamilyType] = useState("0");
  const [MemberNo, setMemberNo] = useState({ value: "0", error: "" });
  const [EduString, setEduString] = useState("-");
  const [RationCardType, setRationCardType] = useState("0");
  const [Structure, setStructure] = useState("0");
  const [areaLived, setAreaLived] = useState("-");
  const [OwnerShip, setOwnerShip] = useState("0");
  const [OwnerShipOther, setOwnerShipOther] = useState("-");

  const [agriculture, setAgriculture] = useState("0");
  const [allied, setAllied] = useState("0");
  const [houseHoldInd, setHouseHoldInd] = useState("0");
  const [rentOutAgr, setRentOutAgr] = useState("0");
  const [rentOutRes, setRentOutRes] = useState("0");
  const [SaleFire, setSaleFire] = useState("0");
  const [other, setOther] = useState("0");
  const [agricultureRemark, setAgricultureRemark] = useState("-");
  const [alliedRemark, setAlliedRemark] = useState("-");
  const [houseHoldIndRemark, setHouseHoldIndRemark] = useState("-");
  const [rentOutAgrRemark, setRentOutAgrRemark] = useState("-");
  const [rentOutResRemark, setRentOutResRemark] = useState("-");
  const [SaleFireRemark, setSaleFireRemark] = useState("-");
  const [otherRemark, setOtherRemark] = useState("-");

  const [MaleDeath, setMaleDeath] = useState("-");
  const [FemaleDeath, setFemaleDeath] = useState("-");
  const [NeoNatalDeath, setNeoNatalDeath] = useState("-");
  const [MajorCause, setMajorCause] = useState("-");
  const [TreatDepend, setTreatDepend] = useState("0");
  const [Hospital, setHospital] = useState("0");
  const [Home, setHome] = useState("0");
  const [PvtDoc, setPvtDoc] = useState("0");
  const [Homeo, setHomeo] = useState("0");
  const [Ayurved, setAyurved] = useState("0");
  const [Quack, setQuack] = useState("0");
  const [Ojha, setOjha] = useState("0");

  const [WaterAvailable, setWaterAvailable] = useState("0");
  const [WaterSource, setWaterSource] = useState("-");
  const [Bathing, setBathing] = useState("0");
  const [Drinking, setDrinking] = useState("0");
  const [Cooking, setCooking] = useState("0");
  const [BathingCattle, setBathingCattle] = useState("0");
  const [WateringPlants, setWateringPlants] = useState("0");
  const [WashingUtensils, setWashingUtensils] = useState("0");
  const [WashingClothes, setWashingClothes] = useState("0");
  const [WaterOthers, setWaterOthers] = useState("0");
  const [HrMorning, setHrMorning] = useState("-");
  const [HrNoon, setHrNoon] = useState("-");
  const [HrEvening, setHrEvening] = useState("-");
  const [DayMorning, setDayMorning] = useState("-");
  const [DayNoon, setDayNoon] = useState("-");
  const [DayEvening, setDayEvening] = useState("-");
  const [MeteredConn, setMeteredConn] = useState("0");
  const [WaterCharge, setWaterCharge] = useState("0");
  const [WaterCare, setWaterCare] = useState("0");
  const [FetchWater, setFetchWater] = useState("0");
  const [Distance, setDistance] = useState("0");
  const [Clarity, setClarity] = useState("0");
  const [Odor, setOdor] = useState("0");
  const [MonthSpent, setMonthSpent] = useState("0");
  const [WaterSatisfied, setWaterSatisfied] = useState("0");
  const [GovtConn, setGovtConn] = useState("0");
  const [CleanRegularWater, setCleanRegularWater] = useState("0");
  const [ConnectionType, setConnectionType] = useState("0");
  const [ChargeMonth, setChargeMonth] = useState("0");
  const [OneTimeConn, setOneTimeConn] = useState("0");
  const [ExpectationAuthority, setExpectationAuthority] = useState("0");
  const [DrinkingSeasonal, setDrinkingSeasonal] = useState("0");
  const [DiseasesKind, setDiseasesKind] = useState("0");

  const [ToiletType, setToiletType] = useState("0");
  const [TankDischarge, setTankDischarge] = useState("0");
  const [TankDischargeOther, setTankDischargeOther] = useState("-");
  const [ToiletLocationPart, setToiletLocationPart] = useState("0");
  const [ShareFacility, setShareFacility] = useState("0");
  const [UseToiletFacility, setUseToiletFacility] = useState("0");
  const [CareCleaningToilet, setCareCleaningToilet] = useState("0");
  const [SewerageNetwork, setSewerageNetwork] = useState("0");
  const [DoesOverflow, setDoesOverflow] = useState("0");
  const [StormWaterDrains, setStormWaterDrains] = useState("0");
  const [StormWaterNearHouse, setStormWaterNearHouse] = useState("0");
  const [TankOld, setTankOld] = useState("0");
  const [HowFrequentEmptied, setHowFrequentEmptied] = useState("0");
  const [HowEmptied, setHowEmptied] = useState("0");
  const [HowEmptiedOther, setHowEmptiedOther] = useState("-");
  const [WhoEmptied, setWhoEmptied] = useState("0");
  const [WhoEmptiedOther, setWhoEmptiedOther] = useState("-");
  const [LastEmptied, setLastEmptied] = useState("0");
  const [LastEmptiedOther, setLastEmptiedOther] = useState("-");

  const [KitchenWasteWater, setKitchenWasteWater] = useState("0");
  const [BathingWasteWater, setBathingWasteWater] = useState("0");
  const [CleaningWater, setCleaningWater] = useState("0");
  const [ToiletDischarge, setToiletDischarge] = useState("0");
  const [OtherWaste, setOtherWaste] = useState("0");
  const [Overflowing, setOverflowing] = useState("0");
  const [WhichSeason, setWhichSeason] = useState("-");
  const [ExistingDrainage, setExistingDrainage] = useState("0");
  const [FailedDrainage, setFailedDrainage] = useState("0");
  const [SewerOdors, setSewerOdors] = useState("0");
  const [LoggingLongHr, setLoggingLongHr] = useState("-");
  const [LoggingLongMin, setLoggingLongMin] = useState("-");
  const [FrequentLogHr, setFrequentLogHr] = useState("-");
  const [FrequentLogMin, setFrequentLogMin] = useState("-");
  const [DrainAway, setDrainAway] = useState("-");
  const [MaintenanceGovt, setMaintenanceGovt] = useState("0");
  const [LoggingExpense, setLoggingExpense] = useState("0");
  const [LoggingExpenseMuch, setLoggingExpenseMuch] = useState("0");

  const [DisposedWaste, setDisposedWaste] = useState("0");
  const [DisposedProperly, setDisposedProperly] = useState("0");
  const [IdentifyCauses, setIdentifyCauses] = useState("0");
  const [SolidWasteType, setSolidWasteType] = useState("0");
  const [ContainerType, setContainerType] = useState("0");
  const [WasteSegregation, setWasteSegregation] = useState("0");
  const [SegregateAtPlace, setSegregateAtPlace] = useState("0");
  const [ContainerEmptied, setContainerEmptied] = useState("0");
  const [DoorToDoor, setDoorToDoor] = useState("0");
  const [DoorCollectionCharge, setDoorCollectionCharge] = useState("0");
  const [DisposeWaste, setDisposeWaste] = useState("0");
  const [PublicBinsEmptied, setPublicBinsEmptied] = useState("0");
  const [StatePublicBin, setStatePublicBin] = useState("0");
  const [ProblemWasteManagement1, setProblemWasteManagement1] = useState("-");
  const [ProblemWasteManagement2, setProblemWasteManagement2] = useState("-");
  const [ProblemWasteManagement3, setProblemWasteManagement3] = useState("-");
  const [ProblemWasteManagement4, setProblemWasteManagement4] = useState("-");
  const [ProblemWasteManagement5, setProblemWasteManagement5] = useState("-");
  const [ProblemWasteManagement6, setProblemWasteManagement6] = useState("-");
  const [RemovalWaste, setRemovalWaste] = useState("0");
  const [SolidWasteCollection, setSolidWasteCollection] = useState("0");
  const [WasteManagementCentre, setWasteManagementCentre] = useState("0");
  const [WasteManagementProcess, setWasteManagementProcess] = useState("0");
  const [impRecycling, setImpRecycling] = useState("0");
  const [SolidWasteRecycling, setSolidWasteRecycling] = useState("0");
  const [CollectionPurposes, setCollectionPurposes] = useState("0");
  const [WasteManagementImportant, setWasteManagementImportant] = useState("-");
  const [MunicipalityResolve, setMunicipalityResolve] = useState("-");

  const [RoadCondition, setRoadCondition] = useState("0");
  const [MajorRoad, setMajorRoad] = useState("0");
  const [ImpRoad1, setImpRoad1] = useState("-");
  const [ImpRoad2, setImpRoad2] = useState("-");
  const [ImpRoad3, setImpRoad3] = useState("-");
  const [ImpRoad4, setImpRoad4] = useState("-");
  const [ImpRoad5, setImpRoad5] = useState("-");
  const [ImpRoad6, setImpRoad6] = useState("-");
  const [PrimaryString, setPrimaryString] = useState("-");
  const [SecondaryString, setSecondaryString] = useState("-");
  const [CollegeString, setCollegeString] = useState("-");
  const [RegularString, setRegularString] = useState("-");
  const [CommonHealthString, setCommonHealthString] = useState("-");
  const [GovtHospitalString, setGovtHospitalString] = useState("-");
  const [DistrictString, setDistrictString] = useState("-");
  const [PostOfficeString, setPostOfficeString] = useState("-");
  const [WorkPlaceString, setWorkPlaceString] = useState("-");
  const [ReligiousRegularString, setReligiousString] = useState("-");
  const [TransportMainlyUsed, setTransportMainlyUsed] = useState("0");

  const [WaterRank, setWaterRank] = useState("0");
  const [SanitationRank, setSanitationRank] = useState("0");
  const [DrainageRank, setDrainageRank] = useState("0");
  const [SolidWasteRank, setSolidWasteRank] = useState("0");
  const [TransportRank, setTransportRank] = useState("0");
  const [WaterReason, setWaterReason] = useState("-");
  const [SanitationReason, setSanitationReason] = useState("-");
  const [DrainageReason, setDrainageReason] = useState("-");
  const [SolidWasteReason, setSolidWasteReason] = useState("-");
  const [TransportReason, setTransportReason] = useState("-");
  const [PriorityRemark, setPriorityRemark] = useState("-");
  const [File, setFile] = useState([]);
  let DocUploadResult = 0;

  const [ParkName, setParkName] = useState("-");
  const [ParkUse, setParkUse] = useState("0");
  const [ParkDistance, setParkDistance] = useState("0");
  const [ParkAccessibility, setParkAccessibility] = useState("0");
  const [ParkParking, setParkParking] = useState("0");
  const [ParkAccompany, setParkAccompany] = useState("0");
  const [ParkVisitReasons, setParkVisitReasons] = useState("-");
  const [AvgTimeHr, setAvgTimeHr] = useState("0");
  const [AvgTimeMin, setAvgTimeMin] = useState("0");
  const [MostVisited, setMostVisited] = useState("-");
  const [EventOrganized, setEventOrganized] = useState("0");
  const [WhatEvent, setWhatEvent] = useState("-");
  const [OrganizerName, setOrganizerName] = useState("-");
  const [OrganizerNo, setOrganizerNo] = useState("0");
  const [ChildrenParticipated, setChildrenParticipated] = useState("0");
  const [PlayEquipment, setPlayEquipment] = useState("-");
  const [ParkClean, setParkClean] = useState("0");
  const [ParkToilet, setParkToilet] = useState("0");
  const [ParkDisturb, setParkDisturb] = useState("0");
  const [ParkDisturbOther, setParkDisturbOther] = useState("-");
  const [ImproveIdea, setImproveIdea] = useState("-");

  const [isClicked, setClicked] = useState(false);
  const [submitFlag, setSubmitFlag] = useState("0");

  function getGIChildData(sCurrentDate, sDistHq, sColony, sWard, sHouseNo) {
    setCurrentDate(sCurrentDate);
    setDistHq(sDistHq);
    setColony(sColony);
    setWard(sWard);
    setHouseNo(sHouseNo);
  }
  function getGEcoChildData(
    sAgriculture,
    sAllied,
    sHouseHoldInd,
    sRentOutAgr,
    sRentOutRes,
    sSaleFire,
    sOther,
    sAgricultureRemark,
    sAlliedRemark,
    sHouseHoldIndRemark,
    sRentOutAgrRemark,
    sRentOutResRemark,
    sSaleFireRemark,
    sOtherRemark
  ) {
    setAgriculture(sAgriculture);
    setAllied(sAllied);
    setHouseHoldInd(sHouseHoldInd);
    setRentOutAgr(sRentOutAgr);
    setRentOutRes(sRentOutRes);
    setSaleFire(sSaleFire);
    setOther(sOther);
    setAgricultureRemark(sAgricultureRemark);
    setAlliedRemark(sAlliedRemark);
    setHouseHoldIndRemark(sHouseHoldIndRemark);
    setRentOutAgrRemark(sRentOutAgrRemark);
    setRentOutResRemark(sRentOutResRemark);
    setSaleFireRemark(sSaleFireRemark);
    setOtherRemark(sOtherRemark);
  }
  function getHhChildData(
    sRespondentName,
    sHohRelation,
    sHohName,
    sGender,
    sMobileNo,
    sProofType,
    sProofNo,
    sCategory,
    sTribeName,
    sVulnerability,
    sVulnerabilityOther,
    sFamilyType,
    sMemberNo,
    sEduString,
    sRationCardType,
    sStructure,
    sAreaLived,
    sOwnerShip,
    sOwnerShipOther
  ) {
    setRespondentName(sRespondentName);
    setHohRelation(sHohRelation);
    setHohName(sHohName);
    setGender(sGender);
    setMobileNo(sMobileNo);
    setProofType(sProofType);
    setProofNo(sProofNo);
    setSCategory(sCategory);
    setTribeName(sTribeName);
    setVulnerability(sVulnerability);
    setVulnerabilityOther(sVulnerabilityOther);
    setFamilyType(sFamilyType);
    setMemberNo(sMemberNo);
    setEduString(sEduString);
    setRationCardType(sRationCardType);
    setStructure(sStructure);
    setAreaLived(sAreaLived);
    setOwnerShip(sOwnerShip);
    setOwnerShipOther(sOwnerShipOther);
  }
  function getGenHealthData(
    sMaleDeath,
    sFemaleDeath,
    sNeoNatalDeath,
    sMajorCause,
    sTreatDepend,
    sHospital,
    sHome,
    sPvtDoc,
    sHomeo,
    sAyurved,
    sQuack,
    sOjha
  ) {
    setMaleDeath(sMaleDeath);
    setFemaleDeath(sFemaleDeath);
    setNeoNatalDeath(sNeoNatalDeath);
    setMajorCause(sMajorCause);
    setTreatDepend(sTreatDepend);
    setHospital(sHospital);
    setHome(sHome);
    setPvtDoc(sPvtDoc);
    setHomeo(sHomeo);
    setAyurved(sAyurved);
    setQuack(sQuack);
    setOjha(sOjha);
  }
  function getWaterSupplyData(
    sWaterAvailable,
    sWaterSource,
    sBathing,
    sDrinking,
    sCooking,
    sBathingCattle,
    sWateringPlants,
    sWashingUtensils,
    sWashingClothes,
    sWaterOthers,
    sHrMorning,
    sHrNoon,
    sHrEvening,
    sDayMorning,
    sDayNoon,
    sDayEvening,
    sMeteredConn,
    sWaterCharge,
    sWaterCare,
    sFetchWater,
    sDistance,
    sClarity,
    sOdor,
    sMonthSpent,
    sWaterSatisfied,
    sGovtConn,
    sCleanRegularWater,
    sConnectionType,
    sChargeMonth,
    sOneTimeConn,
    sExpectationAuthority,
    sDrinkingSeasonal,
    sDiseasesKind
  ) {
    setWaterAvailable(sWaterAvailable);
    setWaterSource(sWaterSource);
    setBathing(sBathing);
    setDrinking(sDrinking);
    setCooking(sCooking);
    setBathingCattle(sBathingCattle);
    setWateringPlants(sWateringPlants);
    setWashingUtensils(sWashingUtensils);
    setWashingClothes(sWashingClothes);
    setWaterOthers(sWaterOthers);
    setHrMorning(sHrMorning);
    setHrNoon(sHrNoon);
    setHrEvening(sHrEvening);
    setDayMorning(sDayMorning);
    setDayNoon(sDayNoon);
    setDayEvening(sDayEvening);
    setMeteredConn(sMeteredConn);
    setWaterCharge(sWaterCharge);
    setWaterCare(sWaterCare);
    setFetchWater(sFetchWater);
    setDistance(sDistance);
    setClarity(sClarity);
    setOdor(sOdor);
    setMonthSpent(sMonthSpent);
    setWaterSatisfied(sWaterSatisfied);
    setGovtConn(sGovtConn);
    setCleanRegularWater(sCleanRegularWater);
    setConnectionType(sConnectionType);
    setChargeMonth(sChargeMonth);
    setOneTimeConn(sOneTimeConn);
    setExpectationAuthority(sExpectationAuthority);
    setDrinkingSeasonal(sDrinkingSeasonal);
    setDiseasesKind(sDiseasesKind);
  }
  function getDrainagePartData(
    sToiletType,
    sTankDischarge,
    sTankDischargeOther,
    sToiletLocationPart,
    sShareFacility,
    sUseToiletFacility,
    sCareCleaningToilet,
    sSewerageNetwork,
    sDoesOverflow,
    sStormWaterDrains,
    sStormWaterNearHouse,
    sTankOld,
    sHowFrequentEmptied,
    sHowEmptied,
    sHowEmptiedOther,
    sWhoEmptied,
    sWhoEmptiedOther,
    sLastEmptied,
    sLastEmptiedOther
  ) {
    console.log(
      sToiletType,
      sTankDischarge,
      sTankDischargeOther,
      sToiletLocationPart,
      sShareFacility,
      sUseToiletFacility,
      sCareCleaningToilet,
      sSewerageNetwork,
      sDoesOverflow,
      sStormWaterDrains,
      sStormWaterNearHouse,
      sTankOld,
      sHowFrequentEmptied,
      sHowEmptied,
      sHowEmptiedOther,
      sWhoEmptied,
      sWhoEmptiedOther,
      sLastEmptied,
      sLastEmptiedOther
    );
    setToiletType(sToiletType);
    setTankDischarge(sTankDischarge);
    setTankDischargeOther(sTankDischargeOther);
    setToiletLocationPart(sToiletLocationPart);
    setShareFacility(sShareFacility);
    setUseToiletFacility(sUseToiletFacility);
    setCareCleaningToilet(sCareCleaningToilet);
    setSewerageNetwork(sSewerageNetwork);
    setDoesOverflow(sDoesOverflow);
    setStormWaterDrains(sStormWaterDrains);
    setStormWaterNearHouse(sStormWaterNearHouse);
    setTankOld(sTankOld);
    setHowFrequentEmptied(sHowFrequentEmptied);
    setHowEmptied(sHowEmptied);
    setHowEmptiedOther(sHowEmptiedOther);
    setWhoEmptied(sWhoEmptied);
    setWhoEmptiedOther(sWhoEmptiedOther);
    setLastEmptied(sLastEmptied);
    setLastEmptiedOther(sLastEmptiedOther);
  }
  function getWastewaterData(
    sKitchenWasteWater,
    sBathingWasteWater,
    sCleaningWater,
    sToiletDischarge,
    sOthers,
    sOverflowing,
    sWhichSeason,
    sExistingDrainage,
    sFailedDrainage,
    sSewerOdors,
    sLoggingLongHr,
    sLoggingLongMin,
    sFrequentLogHr,
    sFrequentLogMin,
    sDrainAway,
    sMaintenanceGovt,
    sLoggingExpense,
    sLoggingExpenseMuch
  ) {
    setKitchenWasteWater(sKitchenWasteWater);
    setBathingWasteWater(sBathingWasteWater);
    setCleaningWater(sCleaningWater);
    setToiletDischarge(sToiletDischarge);
    setOtherWaste(sOthers);
    setOverflowing(sOverflowing);
    setWhichSeason(sWhichSeason);
    setExistingDrainage(sExistingDrainage);
    setFailedDrainage(sFailedDrainage);
    setSewerOdors(sSewerOdors);
    setLoggingLongHr(sLoggingLongHr);
    setLoggingLongMin(sLoggingLongMin);
    setFrequentLogHr(sFrequentLogHr);
    setFrequentLogMin(sFrequentLogMin);
    setDrainAway(sDrainAway);
    setMaintenanceGovt(sMaintenanceGovt);
    setLoggingExpense(sLoggingExpense);
    setLoggingExpenseMuch(sLoggingExpenseMuch);
  }
  function getSolidWasteData(
    sDisposedWaste,
    sDisposedProperly,
    sIdentifyCauses,
    sSolidWasteType,
    sContainerType,
    sWasteSegregation,
    sSegregateAtPlace,
    sContainerEmptied,
    sDoorToDoor,
    sDoorCollectionCharge,
    sDisposeWaste,
    sPublicBinsEmptied,
    sStatePublicBin,
    sProblemWasteManagement1,
    sProblemWasteManagement2,
    sProblemWasteManagement3,
    sProblemWasteManagement4,
    sProblemWasteManagement5,
    sProblemWasteManagement6,
    sRemovalWaste,
    sSolidWasteCollection,
    sWasteManagementCentre,
    sWasteManagementProcess,
    simpRecycling,
    sSolidWasteRecycling,
    sCollectionPurposes,
    sWasteManagementImportant,
    sMunicipalityResolve
  ) {
    setDisposedWaste(sDisposedWaste);
    setDisposedProperly(sDisposedProperly);
    setIdentifyCauses(sIdentifyCauses);
    setSolidWasteType(sSolidWasteType);
    setContainerType(sContainerType);
    setWasteSegregation(sWasteSegregation);
    setSegregateAtPlace(sSegregateAtPlace);
    setContainerEmptied(sContainerEmptied);
    setDoorToDoor(sDoorToDoor);
    setDoorCollectionCharge(sDoorCollectionCharge);
    setDisposeWaste(sDisposeWaste);
    setPublicBinsEmptied(sPublicBinsEmptied);
    setStatePublicBin(sStatePublicBin);
    setProblemWasteManagement1(sProblemWasteManagement1);
    setProblemWasteManagement2(sProblemWasteManagement2);
    setProblemWasteManagement3(sProblemWasteManagement3);
    setProblemWasteManagement4(sProblemWasteManagement4);
    setProblemWasteManagement5(sProblemWasteManagement5);
    setProblemWasteManagement6(sProblemWasteManagement6);
    setRemovalWaste(sRemovalWaste);
    setSolidWasteCollection(sSolidWasteCollection);
    setWasteManagementCentre(sWasteManagementCentre);
    setWasteManagementProcess(sWasteManagementProcess);
    setImpRecycling(simpRecycling);
    setSolidWasteRecycling(sSolidWasteRecycling);
    setCollectionPurposes(sCollectionPurposes);
    setWasteManagementImportant(sWasteManagementImportant);
    setMunicipalityResolve(sMunicipalityResolve);
  }
  function getTransportData(
    sRoadCondition,
    sMajorRoad,
    sImpRoad1,
    sImpRoad2,
    sImpRoad3,
    sImpRoad4,
    sImpRoad5,
    sImpRoad6,
    sPrimaryString,
    sSecondaryString,
    sCollegeString,
    sRegularString,
    sCommonHealthString,
    sGovtHospitalString,
    sDistrictString,
    sPostOfficeString,
    sWorkPlaceString,
    sReligiousRegularString,
    sTransportMainlyUsed
  ) {
    console.log(
      sRoadCondition,
      sMajorRoad,
      sImpRoad1,
      sImpRoad2,
      sImpRoad3,
      sImpRoad4,
      sImpRoad5,
      sImpRoad6,
      sPrimaryString,
      sSecondaryString,
      sCollegeString,
      sRegularString,
      sCommonHealthString,
      sGovtHospitalString,
      sDistrictString,
      sPostOfficeString,
      sWorkPlaceString,
      sReligiousRegularString,
      sTransportMainlyUsed
    );
    setRoadCondition(sRoadCondition);
    setMajorRoad(sMajorRoad);
    setImpRoad1(sImpRoad1);
    setImpRoad2(sImpRoad2);
    setImpRoad3(sImpRoad3);
    setImpRoad4(sImpRoad4);
    setImpRoad5(sImpRoad5);
    setImpRoad6(sImpRoad6);
    setPrimaryString(sPrimaryString);
    setSecondaryString(sSecondaryString);
    setCollegeString(sCollegeString);
    setRegularString(sRegularString);
    setCommonHealthString(sCommonHealthString);
    setGovtHospitalString(sGovtHospitalString);
    setDistrictString(sDistrictString);
    setPostOfficeString(sPostOfficeString);
    setWorkPlaceString(sWorkPlaceString);
    setReligiousString(sReligiousRegularString);
    setTransportMainlyUsed(sTransportMainlyUsed);
  }
  function getParkData(
    sParkName,
    sParkUse,
    sParkDistance,
    sParkAccessibility,
    sParkParking,
    sParkAccompany,
    sParkVisitReasons,
    sAvgTimeHr,
    sAvgTimeMin,
    sMostVisited,
    sEventOrganized,
    sWhatEvent,
    sOrganizerName,
    sOrganizerNo,
    sChildrenParticipated,
    sPlayEquipment,
    sParkClean,
    sParkToilet,
    sParkDisturb,
    sParkDisturbOther,
    sImproveIdea
  ) {
    setParkName(sParkName);
    setParkUse(sParkUse);
    setParkDistance(sParkDistance);
    setParkAccessibility(sParkAccessibility);
    setParkParking(sParkParking);
    setParkAccompany(sParkAccompany);
    setParkVisitReasons(sParkVisitReasons);
    setAvgTimeHr(sAvgTimeHr);
    setAvgTimeMin(sAvgTimeMin);
    setMostVisited(sMostVisited);
    setEventOrganized(sEventOrganized);
    setWhatEvent(sWhatEvent);
    setOrganizerName(sOrganizerName);
    setOrganizerNo(sOrganizerNo);
    setChildrenParticipated(sChildrenParticipated);
    setPlayEquipment(sPlayEquipment);
    setParkClean(sParkClean);
    setParkToilet(sParkToilet);
    setParkDisturb(sParkDisturb);
    setParkDisturbOther(sParkDisturbOther);
    setImproveIdea(sImproveIdea);
  }
  function getOtherData(
    sWaterRank,
    sSanitationRank,
    sDrainageRank,
    sSolidWasteRank,
    sTransportRank,
    sWaterReason,
    sSanitationReason,
    sDrainageReason,
    sSolidWasteReason,
    sTransportReason,
    sPriorityRemark,
    sFile
  ) {
    setWaterRank(sWaterRank);
    setSanitationRank(sSanitationRank);
    setDrainageRank(sDrainageRank);
    setSolidWasteRank(sSolidWasteRank);
    setTransportRank(sTransportRank);
    setWaterReason(sWaterReason);
    setSanitationReason(sSanitationReason);
    setDrainageReason(sDrainageReason);
    setSolidWasteReason(sSolidWasteReason);
    setTransportReason(sTransportReason);
    setPriorityRemark(sPriorityRemark);
    setFile(sFile);
  }

  const valueCheck = () => {
    if (distHq == "-") {
      alert(
        "Please Enter District Headquarter! Please Go to 'General Info' Tab"
      );
    } else if (colony == "-") {
      alert("Please Enter Colony Name.! Please Go to 'General Info' Tab");
    } else if (ward == "0") {
      alert("Please Enter Ward Number! Please Go to 'General Info' Tab");
    } else if (HouseNo == "-") {
      alert("Please Enter House Number! Please Go to 'General Info' Tab");
    } else {
      HouseValueCheck();
    }
  };
  const HouseValueCheck = () => {
    if (RespondentName == "-") {
      alert(
        "Please Enter Respondent Name! Please Go to 'Household Characteristics' Tab"
      );
    } else if (HohRelation == "0") {
      alert(
        "Please Enter Relation! Please Go to 'Household Characteristics' Tab"
      );
    } else if (HohName == "-") {
      alert("Please Enter Name.! Please Go to 'Household Characteristics' Tab");
    } else if (Gender == "0") {
      alert(
        "Please Enter Gender! Please Go to 'Household Characteristics' Tab"
      );
    } else if (MobileNo == "-") {
      alert(
        "Please Enter Mobile No! Please Go to 'Household Characteristics' Tab"
      );
    } else if (ProofType == "0") {
      alert(
        "Please Select ID Proof Type. Please Go to 'Household Characteristics' Tab"
      );
    } else if (ProofType == "1" && ProofNo == "-") {
      alert(
        "Please Enter Aadhar No.! Please Go to 'Household Characteristics' Tab"
      );
    } else if (ProofType == "2" && ProofNo == "-") {
      alert(
        "Please Enter Voter ID No.! Please Go to 'Household Characteristics' Tab"
      );
    } else if (ProofType == "3" && ProofNo == "-") {
      alert(
        "Please Enter Driving license No.! Please Go to 'Household Characteristics' Tab"
      );
    } else if (ProofType == "4" && ProofNo == "-") {
      alert(
        "Please Specify ID Proof No.! Please Go to 'Household Characteristics' Tab"
      );
    } else if (sCategory == "0") {
      alert(
        "Please Enter Category! Please Go to 'Household Characteristics' Tab"
      );
    } else if (TribeName == "-") {
      alert(
        "Please Enter Tribe Name.! Please Go to 'Household Characteristics' Tab"
      );
    } else if (Vulnerability == "0") {
      alert(
        "Please Enter Vulnerability! Please Go to 'Household Characteristics' Tab"
      );
    } else if (Vulnerability == "5" && VulnerabilityOther == "-") {
      alert(
        "Please specify other Vulnerability.! Please Go to 'Household Characteristics' Tab"
      );
    } else if (FamilyType == "0") {
      alert(
        "Please Enter Family Type! Please Go to 'Household Characteristics' Tab"
      );
    } else if (MemberNo == "0") {
      alert(
        "Please Enter Total Number of Family Members! Please Go to 'Household Characteristics' Tab"
      );
    } else if (RationCardType == "0") {
      alert(
        "Please Enter Ration Card Type! Please Go to 'Household Characteristics' Tab"
      );
    } else if (Structure == "0") {
      alert(
        "Please Enter Structure Type! Please Go to 'Household Characteristics' Tab"
      );
    } else if (areaLived == "-") {
      alert(
        "Please Enter How long you lived this area! Please Go to 'Household Characteristics' Tab"
      );
    } else if (OwnerShip == "0") {
      alert(
        "Please Enter OwnerShip! Please Go to 'Household Characteristics' Tab"
      );
    } else if (OwnerShip == "3" && OwnerShipOther == "-") {
      alert(
        "Please specify Other OwnerShip.! Please Go to 'Household Characteristics' Tab"
      );
    } else {
      EcoValueCheck();
    }
  };
  const EcoValueCheck = () => {
    if (
      agriculture == "0" &&
      allied == "0" &&
      houseHoldInd == "0" &&
      rentOutAgr == "0" &&
      rentOutRes == "0" &&
      SaleFire == "0" &&
      other == "0"
    ) {
      alert(
        "Please Enter At Least One Income ! Please Go to 'General Economic Status' Tab"
      );
    } else if (
      agricultureRemark == "-" &&
      alliedRemark == "-" &&
      houseHoldIndRemark == "-" &&
      rentOutAgrRemark == "-" &&
      rentOutResRemark == "-" &&
      SaleFireRemark == "-" &&
      otherRemark == "-"
    ) {
      alert(
        "Please Enter Remark Of that Income! Please Go to 'General Economic Status' Tab"
      );
    } else {
      GenHealthValueCheck();
    }
  };
  const GenHealthValueCheck = () => {
    if (MaleDeath == "-") {
      alert(
        "Please Enter Male deaths in last 5 yrs! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (FemaleDeath == "-") {
      alert(
        "Please Enter Female deaths in last 5 yrs! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (NeoNatalDeath == "-") {
      alert(
        "Please Enter NeoNatal deaths in last 5 yrs! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (MajorCause == "-") {
      alert(
        "Please Enter Major Cause of death! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (TreatDepend == "0") {
      alert(
        "Please Enter depend for treatment! Please Go to 'General Health and Hygiene' Tab "
      );
    } else if (Hospital == "0") {
      alert(
        "How often do you go to hospital! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (Home == "0") {
      alert(
        "How often do you go to N/ Home! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (PvtDoc == "0") {
      alert(
        "How often do you go to Pvt. Doc.! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (Homeo == "0") {
      alert(
        "How often do you go to Homeo! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (Ayurved == "0") {
      alert(
        "How often do you go to Ayurved! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (Quack == "0") {
      alert(
        "How often do you go to Quack! Please Go to 'General Health and Hygiene' Tab"
      );
    } else if (Ojha == "0") {
      alert(
        "How often do you go to Ojha/ Gunin! Please Go to 'General Health and Hygiene' Tab"
      );
    } else {
      WaterSupplyValueCheck();
    }
  };
  const WaterSupplyValueCheck = () => {
    if (WaterAvailable == "0") {
      alert(
        "Please Enter Drinking Water Availability! Please Go to 'Water Supply' Tab"
      );
    } else if (WaterSource == "") {
      alert(
        "Please Enter Current source of Drinking Water! Please Go to 'Water Supply' Tab"
      );
    } else if (Bathing == "") {
      alert("Please Enter Bathing Amenities! Please Go to 'Water Supply' Tab");
    } else if (Drinking == "") {
      alert("Please Enter Drinking Amenities! Please Go to 'Water Supply' Tab");
    } else if (Cooking == "") {
      alert(
        "Please Enter Water for cooking Amenities! Please Go to 'Water Supply' Tab"
      );
    } else if (BathingCattle == "") {
      alert(
        "Please Enter Bathing cattle Amenities! Please Go to 'Water Supply' Tab"
      );
    } else if (WateringPlants == "") {
      alert(
        "Please Enter Watering plants Amenities! Please Go to 'Water Supply' Tab"
      );
    } else if (WashingUtensils == "") {
      alert(
        "Please Enter Washing Utensils Amenities! Please Go to 'Water Supply' Tab"
      );
    } else if (WashingClothes == "") {
      alert(
        "Please Enter Washing clothes Amenities! Please Go to 'Water Supply' Tab"
      );
    } else if (WaterOthers == "") {
      alert("Please Enter Other Amenities! Please Go to 'Water Supply' Tab");
    } else if (HrMorning == "-") {
      alert(
        "Please Enter Duration of Water supply (mention hrs.)! Please Go to 'Water Supply' Tab"
      );
    } else if (HrNoon == "-") {
      alert(
        "Please Enter Duration of Water supply (mention hrs.)! Please Go to 'Water Supply' Tab"
      );
    } else if (HrEvening == "-") {
      alert(
        "Please Enter Duration of Water supply (mention hrs.)! Please Go to 'Water Supply' Tab"
      );
    } else if (DayMorning == "-") {
      alert(
        "Please Enter Number of Days per week! Please Go to 'Water Supply' Tab "
      );
    } else if (DayNoon == "-") {
      alert(
        "Please Enter Number of Days per week! Please Go to 'Water Supply' Tab "
      );
    } else if (DayEvening == "-") {
      alert(
        "Please Enter Number of Days per week! Please Go to 'Water Supply' Tab "
      );
    } else if (MeteredConn == "0") {
      alert(
        "Please specify If there any metered water connectio! Please Go to 'Water Supply' Tab"
      );
    } else if (MeteredConn == "1" && WaterCharge == "0") {
      alert("Please Enter Water Charges! Please Go to 'Water Supply' Tab");
    } else if (WaterCare == "0") {
      alert(
        "Please Enter Who takes care of water in the family! Please Go to 'Water Supply' Tab"
      );
    } else if (FetchWater == "0") {
      alert("Please Enter Do you have to fetch Drinking Water!");
    } else if (FetchWater == "1" && Distance == "0") {
      alert("Please Enter distance! Please Go to 'Water Supply' Tab");
    } else if (Clarity == "0") {
      alert("Please specify Clarity.! Please Go to 'Water Supply' Tab");
    } else if (Odor == "0") {
      alert("Please specify Odor! Please Go to 'Water Supply' Tab");
    } else if (MonthSpent == "0") {
      alert(
        "Please specify How much per month is spent on water! Please Go to 'Water Supply' Tab"
      );
    } else if (WaterSatisfied == "0") {
      alert(
        "Please Enter Are you satisfied with present water supply situation? Please Go to 'Water Supply' Tab"
      );
    } else if (WaterSatisfied == "2" && GovtConn == "0") {
      alert(
        "Please Enter would like to get house connection from Government! Please Go to 'Water Supply' Tab"
      );
    } else if (
      WaterSatisfied == "2" &&
      GovtConn == "1" &&
      CleanRegularWater == "0"
    ) {
      alert(
        "Please Enter will you like to pay for clean & regular supply of water at your house? Please Go to 'Water Supply' Tab"
      );
    } else if (ConnectionType == "0") {
      alert(
        "Please specify What type of connection do you want? Please Go to 'Water Supply' Tab"
      );
    } else if (ConnectionType == "1" && ChargeMonth == "0") {
      alert(
        "Please Enter User Charges/ Month! Please Go to 'Water Supply' Tab"
      );
    } else if (ConnectionType == "2" && OneTimeConn == "0") {
      alert(
        "Please Enter One time connection! Please Go to 'Water Supply' Tab "
      );
    } else if (ExpectationAuthority == "0") {
      alert(
        "Please Enter What is your expectation from authority for better and quality water supply? Please Go to 'Water Supply' Tab"
      );
    } else if (DrinkingSeasonal == "0") {
      alert(
        "Please specify Do you think you/ your family member getting sick is due to drinking water or seasonal Please Go to 'Water Supply' Tab"
      );
    } else if (DiseasesKind == "0") {
      alert(
        "Please Enter What is the kind of diseases do you/your family members get often? Please Go to 'Water Supply' Tab"
      );
    } else {
      DrainageValueCheck();
    }
  };
  const DrainageValueCheck = () => {
    if (ToiletType == "0") {
      alert(
        "Please Enter What kind of toilet facility do members of your household usually use? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (TankDischarge == "0") {
      alert(
        "Please Enter Where does your septic tank discharge to? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (TankDischarge == "6" && TankDischargeOther == "-") {
      alert(
        "Please Specify Where does your septic tank discharge to? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (ToiletLocationPart == "0") {
      alert(
        "Please Enter Location of the Toilet! Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (ShareFacility == "0") {
      alert(
        "Please Enter Do you share this facility with other households? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (ShareFacility == "1" && UseToiletFacility == "0") {
      alert(
        "Please Enter how many households use this toilet facility? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (CareCleaningToilet == "0") {
      alert(
        "Please Who in your household regularly take care of cleaning the toilet? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if ((ToiletType == "2" || ToiletType == "3") && TankOld == "0") {
      alert(
        "Please Enter How many years old is the currently used pit/tank of the latrine? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (
      (ToiletType == "2" || ToiletType == "3") &&
      HowFrequentEmptied == "0"
    ) {
      alert(
        "Please Enter How frequently that pit/tank of the latrine was emptied? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if ((ToiletType == "2" || ToiletType == "3") && HowEmptied == "0") {
      alert(
        "Please Enter How your pit/tank was last emptied (if emptied)? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (
      (ToiletType == "2" || ToiletType == "3") &&
      HowEmptied == "3" &&
      HowEmptiedOther == "-"
    ) {
      alert(
        "Please Specify How your pit/tank was last emptied (if emptied)? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if ((ToiletType == "2" || ToiletType == "3") && WhoEmptied == "0") {
      alert(
        "Please Enter By whom was it last emptied? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (
      (ToiletType == "2" || ToiletType == "3") &&
      WhoEmptied == "5" &&
      WhoEmptiedOther == "-"
    ) {
      alert(
        "Please Specify By whom was it last emptied? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if ((ToiletType == "2" || ToiletType == "3") && LastEmptied == "0") {
      alert(
        "Please Enter The last time it was emptied, where were the contents emptied to? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (
      (ToiletType == "2" || ToiletType == "3") &&
      LastEmptied == "99" &&
      LastEmptiedOther == "-"
    ) {
      alert(
        "Please Specify The last time it was emptied, where were the contents emptied to? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (SewerageNetwork == "0") {
      alert(
        "Please Enter Is there any Sewerage network exists in your area? Please Go to 'Drainage/Sewerage/Sanitation' Tab "
      );
    } else if (SewerageNetwork == "1" && DoesOverflow == "0") {
      alert(
        "Please Enter does it overflow! Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (StormWaterDrains == "0") {
      alert(
        "Please Enter Does your area have storm water drains? Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else if (StormWaterNearHouse == "0") {
      alert(
        "Please Enter Type of storm water drain adjacent to your house! Please Go to 'Drainage/Sewerage/Sanitation' Tab"
      );
    } else {
      WastewaterValueCheck();
    }
  };
  const WastewaterValueCheck = () => {
    if (KitchenWasteWater == "0") {
      alert(
        "Please Select Kitchen wastewater! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (BathingWasteWater == "0") {
      alert(
        "Please Select Bathing wastewater! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (CleaningWater == "0") {
      alert(
        "Please Select Washing/ Cleaning water! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (ToiletDischarge == "0") {
      alert(
        "Please Select Sewerage/ Toilet discharge! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (OtherWaste == "0") {
      alert(
        "Please Select Others Wastewater! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (Overflowing == "0") {
      alert(
        "Please Enter Does overflowing of current drain occur?! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (WhichSeason == "-") {
      alert(
        "Please Enter in which season it is occurred most?! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (ExistingDrainage == "0") {
      alert(
        "Please Enter Any problem faced due to the existing drainage system or maintenance?! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (FailedDrainage == "0") {
      alert(
        "Please Enter The existing drainage system is failed in your area due to! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (SewerOdors == "0") {
      alert(
        "Please Enter Did you notice any sanitary sewer odors from the storm water?! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (LoggingLongHr == "-") {
      alert(
        "Please Specify How long the water logging exists Hour! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (LoggingLongMin == "-") {
      alert(
        "Please Enter How long the water logging exists Min.! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (FrequentLogHr == "-") {
      alert(
        "Please Enter How frequently the water logging occurs Hour! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (FrequentLogMin == "-") {
      alert(
        "Please Enter How frequently the water logging occurs Min.! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (DrainAway == "-") {
      alert(
        "Please Specify During the worst event, how long did it take for the water to drain away?! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (MaintenanceGovt == "0") {
      alert(
        "Please Enter Is there any maintenance done by community/ Govt.?! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (LoggingExpense == "0") {
      alert(
        "Please Enter Is there any expense related to water logging/existing drainage! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else if (LoggingExpense == "1" && LoggingExpenseMuch == "0") {
      alert(
        "Please Enter Does your area have storm water drains?! Please Go to 'Wastewater Disposal System' Tab"
      );
    } else {
      SolidWasteValueCheck();
    }
  };
  const SolidWasteValueCheck = () => {
    if (DisposedWaste == "0") {
      alert(
        "Please Select How do you dispose your household waste?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (DisposedProperly == "0") {
      alert(
        "Please Select Do you agree if the waste is not disposed properly, it can pollute the environment?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (DisposedProperly == "1" && IdentifyCauses == "0") {
      alert(
        "Please identify the causes /reasons for some of these problems! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (SolidWasteType == "0") {
      alert(
        "Please Select What type of solid waste comes out from your household?! Please Go to 'Solid Waste Management' Tab "
      );
    } else if (ContainerType == "0") {
      alert(
        "Please Select In what type of container do you collect waste?! Please Go to 'Solid Waste Management' Tab "
      );
    } else if (WasteSegregation == "0") {
      alert(
        "Please Enter Do you know about waste segregation?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (SegregateAtPlace == "0") {
      alert(
        "Please Enter Do you Segregate the waste at your place?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (ContainerEmptied == "0") {
      alert(
        "Please Enter How often is the waste container emptied?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (DoorToDoor == "0") {
      alert(
        "Please Enter Is there door-to-door waste collection by the municipality?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (DoorToDoor == "1" && DoorCollectionCharge == "0") {
      alert(
        "Please Enter what is the monthly charge for the door-to-door collection?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (DisposeWaste == "0") {
      alert(
        "Please Specify Where do you usually dispose the waste?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (PublicBinsEmptied == "0") {
      alert(
        "Please Enter If there are public bins, how often are the nearest public bins emptied?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (StatePublicBin == "0") {
      alert(
        "Please Enter How can you describe the state of the public bin near your house?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (
      ProblemWasteManagement1 == "-" &&
      ProblemWasteManagement2 == "-" &&
      ProblemWasteManagement3 == "-" &&
      ProblemWasteManagement4 == "-" &&
      ProblemWasteManagement5 == "-" &&
      ProblemWasteManagement6 == "-"
    ) {
      alert(
        "Please Enter at least one problem you think exist in your area as for waste management! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (RemovalWaste == "0") {
      alert(
        "Please Specify Which system do you prefer for removal of your household waste?! Please Go to 'Solid Waste Management' Tab "
      );
    } else if (SolidWasteCollection == "0") {
      alert(
        "Please Enter How do you evaluate the state of solid waste collection in your House area?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (WasteManagementCentre == "0") {
      alert(
        "Please Enter Do you know if there is a waste management centre in your area! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (WasteManagementProcess == "0") {
      alert(
        "Please Enter Are you satisfied with the waste management processes of your area! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (impRecycling == "0") {
      alert(
        "Please Enter Have you ever heard about the importance of recycling?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (impRecycling == "0" && SolidWasteRecycling == "0") {
      alert(
        "Please Enter do you agree to Solid waste recycling?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (CollectionPurposes == "0") {
      alert(
        "Please Enter If a recycling programme was set up, would you be willing to separate materials into separate bags for collection purposes?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (WasteManagementImportant == "-") {
      alert(
        "Please explain why the Solid Waste Management is important to you?! Please Go to 'Solid Waste Management' Tab"
      );
    } else if (MunicipalityResolve == "-") {
      alert(
        "Please explain What do you suggest Municipality to resolve Solid Waste problem?! Please Go to 'Solid Waste Management' Tab"
      );
    } else {
      TransportValueCheck();
    }
  };
  const TransportValueCheck = () => {
    if (RoadCondition == "0") {
      alert(
        "Please Select Connectivity/ road condition in your area! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (MajorRoad == "0") {
      alert(
        "Number of Major roads in your area! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (
      ImpRoad1 == "-" &&
      ImpRoad2 == "-" &&
      ImpRoad3 == "-" &&
      ImpRoad4 == "-" &&
      ImpRoad5 == "-" &&
      ImpRoad6 == "-"
    ) {
      alert(
        "Please Mention most important roads in your area! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (PrimaryString == "-") {
      alert(
        "Please Enter Primary School Access to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (SecondaryString == "-") {
      alert(
        "Please Enter Secondary School to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (CollegeString == "-") {
      alert(
        "Please Enter College Access to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (RegularString == "-") {
      alert(
        "Please Enter Regular Market Access to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (CommonHealthString == "-") {
      alert(
        "Please Specify Commonly visited health service place Access to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (GovtHospitalString == "-") {
      alert(
        "Please Enter Government Hospital Access to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (DistrictString == "-") {
      alert(
        "Please Enter District Office Access to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (PostOfficeString == "-") {
      alert(
        "Please Specify Post Office/ Bank Access to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (WorkPlaceString == "-") {
      alert(
        "Please Enter Work Place/ at Job/ Duty/ Farm/Shop Access to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (ReligiousRegularString == "-") {
      alert(
        "Please Enter Place of worship/ Religious place often visited Access to Facilities/ Transport requirements (Per month)! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else if (TransportMainlyUsed == "0") {
      alert(
        "Please Enter What means of transport is mainly used to convey produce away from village! Please Go to 'Road/Transport/Connectivity' Tab"
      );
    } else {
      ParkValueCheck();
    }
  };
  const ParkValueCheck = () => {
    if (ParkName == "-") {
      alert(
        "Please Enter The name of the park/Open space being evaluated! Please Go to 'Park/Open Space' Tab"
      );
    } else if (ParkUse == "0") {
      alert(
        "Please Enter How often do you use this park/Open space?! Please Go to 'Park/Open Space' Tab "
      );
    } else if (ParkDistance == "0") {
      alert(
        "Please Enter Distance of the park/Open space? (In km/meter)! Please Go to 'Park/Open Space' Tab"
      );
    } else if (ParkAccessibility == "-") {
      alert(
        "Please Enter Accessibility/approach road condition of the park/Open space?! Please Go to 'Park/Open Space' Tab"
      );
    } else if (ParkParking == "0") {
      alert(
        "Please Enter Is there any parking facility/space?! Please Go to 'Park/Open Space' Tab "
      );
    } else if (ParkAccompany == "0") {
      alert(
        "Please Enter Who accompanies you during your visit to the park/Open space?! Please Go to 'Park/Open Space' Tab  "
      );
    } else if (ParkVisitReasons == "") {
      alert(
        "Please Enter At Least one Park Visit Reason! Please Go to 'Park/Open Space' Tab"
      );
    } else if (AvgTimeHr == "0" && AvgTimeMin == "0") {
      alert(
        "Please Enter Average time you sent in this park/Open space?! Please Go to 'Park/Open Space' Tab"
      );
    } else if (MostVisited == "-") {
      alert(
        "Please Enter How much crowd came in this park/Open space?! Please Go to 'Park/Open Space' Tab"
      );
    } else if (EventOrganized == "0") {
      alert(
        "Please Enter Is there any program and/ or events organazied in the past?! Please Go to 'Park/Open Space' Tab"
      );
    } else if (EventOrganized == "1" && WhatEvent == "-") {
      alert(
        "Please Specify what program and/ or events are organazied?! Please Go to 'Park/Open Space' Tab"
      );
    } else if (EventOrganized == "1" && OrganizerName == "-") {
      alert(
        "Please Specify Please Specify Organizers Name! Please Go to 'Park/Open Space' Tab"
      );
    } else if (EventOrganized == "1" && OrganizerNo == "0") {
      alert("Please Specify Organizers No! Please Go to 'Park/Open Space' Tab");
    } else if (EventOrganized == "1" && ChildrenParticipated == "0") {
      alert(
        "Please Enter Have you or your children ever participated in a program and/ or events or ogranized program in this park?! Please Go to 'Park/Open Space' Tab"
      );
    } else if (PlayEquipment == "-") {
      alert(
        "Please describe the condition of the play equipment or courts and surrounding area (Visual survey)! Please Go to 'Park/Open Space' Tab"
      );
    } else if (ParkClean == "0") {
      alert(
        "Please Enter Is this park/Open space clean?! Please Go to 'Park/Open Space' Tab"
      );
    } else if (ParkToilet == "0") {
      alert(
        "Please Enter Does the park/Open space have a Toilet?! Please Go to 'Park/Open Space' Tab"
      );
    } else if (ParkDisturb == "0") {
      alert(
        "Please Enter Have you notice any disturbance or antisocial activity in and around the park/Open space! Please Go to 'Park/Open Space' Tab"
      );
    } else if (ParkDisturb == "1" && ParkDisturbOther == "-") {
      alert(
        "Please Enter What Kind of disturbance?! Please Go to 'Park/Open Space' Tab"
      );
    } else if (ImproveIdea == "-") {
      alert(
        "Please note any ideas for improvement to park/Open space! Please Go to 'Park/Open Space' Tab"
      );
    } else {
      OtherValueCheck();
    }
  };
  const OtherValueCheck = () => {
    if (WaterRank == "0") {
      alert(
        "Please RANK YOUR Water facility PRIORITY! Please Go to 'Other Amenities' Tab "
      );
    } else if (SanitationRank == "0") {
      alert(
        "Please RANK YOUR Sanitation PRIORITY! Please Go to 'Other Amenities' Tab "
      );
    } else if (DrainageRank == "0") {
      alert(
        "Please RANK YOUR Drainage PRIORITY! Please Go to 'Other Amenities' Tab "
      );
    } else if (SolidWasteRank == "0") {
      alert(
        "Please RANK YOUR Solid waste management PRIORITY! Please Go to 'Other Amenities' Tab "
      );
    } else if (TransportRank == "0") {
      alert(
        "Please RANK YOUR Transport/Road PRIORITY! Please Go to 'Other Amenities' Tab "
      );
    } else if (WaterReason == "-") {
      alert(
        "Please Enter The Water facility Reason! Please Go to 'Other Amenities' Tab"
      );
    } else if (SanitationReason == "-") {
      alert(
        "Please Enter The Sanitation Reason! Please Go to 'Other Amenities' Tab"
      );
    } else if (DrainageReason == "-") {
      alert(
        "Please Enter The Drainage Reason! Please Go to 'Other Amenities' Tab"
      );
    } else if (SolidWasteReason == "-") {
      alert(
        "Please Enter The Solid waste management Reason! Please Go to 'Other Amenities' Tab"
      );
    } else if (TransportReason == "-") {
      alert(
        "Please Enter The Transport/Road Reason! Please Go to 'Other Amenities' Tab"
      );
    } else if (PriorityRemark == "-") {
      alert("Please Enter REMARKS, IF ANY! Please Go to 'Other Amenities' Tab");
    } else if (File.length == 0) {
      alert("Please Select a File!! Please Go to 'Other Amenities' Tab");
    } else {
      setSubmitFlag("1");
    }
  };

  const SubmitFn = () => {
    valueCheck();
    if (submitFlag == "1") {
      setClicked(true);
      fetch(GeneralEntry, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentDate: currentDate,
          user_Id: user_Id,
          distHq: distHq,
          colony: colony,
          ward: ward,
          HouseNo: HouseNo,
          lat: lat,
          long: long,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          let loginObj = JSON.stringify(response);
          var parsed = JSON.parse(loginObj);
          var success = parsed.success;
          var message = parsed.message;

          if (success == 1) {
            HhSubmitFn();
          } else {
            console.log(message);
            setClicked(false);
            alert("Data Not Added78!!");
          }
        })
        .catch((error) => {
          alert("Error 1" + error);
          setClicked(false);
        });
    }
  };
  const HhSubmitFn = () => {
    setClicked(true);
    fetch(HouseholdEntry, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RespondentName: RespondentName,
        HohRelation: HohRelation,
        HohName: HohName,
        Gender: Gender,
        MobileNo: MobileNo,
        ProofType: ProofType,
        ProofNo: ProofNo,

        sCategory: sCategory,
        TribeName: TribeName,
        Vulnerability: Vulnerability,
        VulnerabilityOther: VulnerabilityOther,
        FamilyType: FamilyType,
        MemberNo: MemberNo,
        EduString: EduString,
        RationCardType: RationCardType,
        Structure: Structure,

        areaLived: areaLived,
        OwnerShip: OwnerShip,
        OwnerShipOther: OwnerShipOther,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          EcoSubmitFn();
        } else {
          console.log(message);
          setClicked(false);
          alert("Data Not Added2!!");
        }
      })
      .catch((error) => {
        alert("Error 2" + error);
        setClicked(false);
      });
  };
  const EcoSubmitFn = () => {
    setClicked(true);
    fetch(GenEcoEntry, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agriculture: agriculture,
        allied: allied,
        houseHoldInd: houseHoldInd,
        rentOutAgr: rentOutAgr,
        rentOutRes: rentOutRes,
        SaleFire: SaleFire,
        other: other,

        agricultureRemark: agricultureRemark,
        alliedRemark: alliedRemark,
        houseHoldIndRemark: houseHoldIndRemark,
        rentOutAgrRemark: rentOutAgrRemark,
        rentOutResRemark: rentOutResRemark,
        SaleFireRemark: SaleFireRemark,
        otherRemark: otherRemark,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          GenHealthSubmitFn();
          setClicked(false);
        } else {
          console.log(message);
          setClicked(false);
          alert("Data Not Added3!!");
        }
      })
      .catch((error) => {
        alert("Error 3" + error);
        setClicked(false);
      });
  };
  const GenHealthSubmitFn = () => {
    setClicked(true);
    fetch(GenHealthEntry, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MaleDeath: MaleDeath,
        FemaleDeath: FemaleDeath,
        NeoNatalDeath: NeoNatalDeath,
        MajorCause: MajorCause,
        TreatDepend: TreatDepend,
        Hospital: Hospital,
        Home: Home,
        PvtDoc: PvtDoc,
        Homeo: Homeo,
        Ayurved: Ayurved,
        Quack: Quack,
        Ojha: Ojha,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          WaterSupplySubmitFn();
        } else {
          setClicked(false);
          alert("Data Not Added4!!");
        }
      })
      .catch((error) => {
        alert("Error 4" + error);
        setClicked(false);
      });
  };
  const WaterSupplySubmitFn = () => {
    setClicked(true);
    fetch(WaterSupplyApi, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        WaterAvailable: WaterAvailable,
        WaterSource: WaterSource,

        Bathing: Bathing,
        Drinking: Drinking,
        Cooking: Cooking,
        BathingCattle: BathingCattle,
        WateringPlants: WateringPlants,
        WashingUtensils: WashingUtensils,
        WashingClothes: WashingClothes,
        WaterOthers: WaterOthers,

        HrMorning: HrMorning,
        HrNoon: HrNoon,
        HrEvening: HrEvening,
        DayMorning: DayMorning,
        DayNoon: DayNoon,
        DayEvening: DayEvening,

        MeteredConn: MeteredConn,
        WaterCharge: WaterCharge,
        WaterCare: WaterCare,
        FetchWater: FetchWater,
        Distance: Distance,
        Clarity: Clarity,
        Odor: Odor,

        MonthSpent: MonthSpent,
        WaterSatisfied: WaterSatisfied,
        GovtConn: GovtConn,
        CleanRegularWater: CleanRegularWater,
        ConnectionType: ConnectionType,
        ChargeMonth: ChargeMonth,

        OneTimeConn: OneTimeConn,
        ExpectationAuthority: ExpectationAuthority,
        DrinkingSeasonal: DrinkingSeasonal,
        DiseasesKind: DiseasesKind,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          DrainageSubmitFn();
        } else {
          setClicked(false);
          alert("Data Not Added!!");
        }
      })
      .catch((error) => {
        alert("Error 5 " + error);
        setClicked(false);
      });
  };
  const DrainageSubmitFn = () => {
    setClicked(true);
    fetch(DrainageApi, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ToiletType: ToiletType,
        TankDischarge: TankDischarge,
        TankDischargeOther: TankDischargeOther,
        ToiletLocationPart: ToiletLocationPart,
        ShareFacility: ShareFacility,
        UseToiletFacility: UseToiletFacility,
        CareCleaningToilet: CareCleaningToilet,
        SewerageNetwork: SewerageNetwork,
        DoesOverflow: DoesOverflow,
        StormWaterDrains: StormWaterDrains,
        StormWaterNearHouse: StormWaterNearHouse,
        TankOld: TankOld,
        HowFrequentEmptied: HowFrequentEmptied,
        HowEmptied: HowEmptied,
        HowEmptiedOther: HowEmptiedOther,
        WhoEmptied: WhoEmptied,
        WhoEmptiedOther: WhoEmptiedOther,
        LastEmptied: LastEmptied,
        LastEmptiedOther: LastEmptiedOther,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          WasteWaterSubmitFn();
        } else {
          console.log(message);
          setClicked(false);
          alert("Data Not Added!!");
        }
      })
      .catch((error) => {
        alert("Error 5 " + error);
        setClicked(false);
      });
  };
  const WasteWaterSubmitFn = () => {
    setClicked(true);
    fetch(WasteWaterApi, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        KitchenWasteWater: KitchenWasteWater,
        BathingWasteWater: BathingWasteWater,
        CleaningWater: CleaningWater,
        ToiletDischarge: ToiletDischarge,
        OtherWaste: OtherWaste,
        Overflowing: Overflowing,
        WhichSeason: WhichSeason,
        ExistingDrainage: ExistingDrainage,
        FailedDrainage: FailedDrainage,
        SewerOdors: SewerOdors,
        LoggingLongHr: LoggingLongHr,
        LoggingLongMin: LoggingLongMin,
        FrequentLogHr: FrequentLogHr,
        FrequentLogMin: FrequentLogMin,
        DrainAway: DrainAway,
        MaintenanceGovt: MaintenanceGovt,
        LoggingExpense: LoggingExpense,
        LoggingExpenseMuch: LoggingExpenseMuch,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          console.log(message);
          SolidWasteSubmitFn();
        } else {
          console.log(message);
          setClicked(false);
          alert("Data Not Added!!");
        }
      })
      .catch((error) => {
        alert("Error 5 " + error);
        setClicked(false);
      });
  };
  const SolidWasteSubmitFn = () => {
    setClicked(true);
    fetch(SolidWasteApi, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DisposedWaste: DisposedWaste,
        DisposedProperly: DisposedProperly,
        IdentifyCauses: IdentifyCauses,
        SolidWasteType: SolidWasteType,
        ContainerType: ContainerType,
        WasteSegregation: WasteSegregation,
        SegregateAtPlace: SegregateAtPlace,
        ContainerEmptied: ContainerEmptied,
        DoorToDoor: DoorToDoor,
        DoorCollectionCharge: DoorCollectionCharge,
        DisposeWaste: DisposeWaste,
        PublicBinsEmptied: PublicBinsEmptied,
        StatePublicBin: StatePublicBin,
        ProblemWasteManagement1: ProblemWasteManagement1,
        ProblemWasteManagement2: ProblemWasteManagement2,
        ProblemWasteManagement3: ProblemWasteManagement3,
        ProblemWasteManagement4: ProblemWasteManagement4,
        ProblemWasteManagement5: ProblemWasteManagement5,
        ProblemWasteManagement6: ProblemWasteManagement6,
        RemovalWaste: RemovalWaste,
        SolidWasteCollection: SolidWasteCollection,
        WasteManagementCentre: WasteManagementCentre,
        WasteManagementProcess: WasteManagementProcess,
        impRecycling: impRecycling,
        SolidWasteRecycling: SolidWasteRecycling,
        CollectionPurposes: CollectionPurposes,
        WasteManagementImportant: WasteManagementImportant,
        MunicipalityResolve: MunicipalityResolve,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          console.log(message);
          TransportSubmitFn();
        } else {
          console.log(message);
          setClicked(false);
          alert("Data Not Added!!");
        }
      })
      .catch((error) => {
        alert("Error6 " + error);
        setClicked(false);
      });
  };
  const TransportSubmitFn = () => {
    setClicked(true);
    fetch(TransportApi, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RoadCondition: RoadCondition,
        MajorRoad: MajorRoad,
        ImpRoad1: ImpRoad1,
        ImpRoad2: ImpRoad2,
        ImpRoad3: ImpRoad3,
        ImpRoad4: ImpRoad4,
        ImpRoad5: ImpRoad5,
        ImpRoad6: ImpRoad6,
        PrimaryString: PrimaryString,
        SecondaryString: SecondaryString,
        CollegeString: CollegeString,
        RegularString: RegularString,
        CommonHealthString: CommonHealthString,
        GovtHospitalString: GovtHospitalString,
        DistrictString: DistrictString,
        PostOfficeString: PostOfficeString,
        WorkPlaceString: WorkPlaceString,
        ReligiousRegularString: ReligiousRegularString,
        TransportMainlyUsed: TransportMainlyUsed,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          console.log(message);
          ParkSubmitFn();
        } else {
          console.log(message);
          setClicked(false);
          alert("Data Not Added!!");
        }
      })
      .catch((error) => {
        alert("Error6 " + error);
        setClicked(false);
      });
  };
  const ParkSubmitFn = () => {
    setClicked(true);
    fetch(ParkApi, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ParkName: ParkName,
        ParkUse: ParkUse,
        ParkDistance: ParkDistance,
        ParkAccessibility: ParkAccessibility,
        ParkParking: ParkParking,
        ParkAccompany: ParkAccompany,
        ParkVisitReasons: ParkVisitReasons,
        AvgTimeHr: AvgTimeHr,
        AvgTimeMin: AvgTimeMin,
        MostVisited: MostVisited,
        EventOrganized: EventOrganized,
        WhatEvent: WhatEvent,
        OrganizerName: OrganizerName,
        OrganizerNo: OrganizerNo,
        ChildrenParticipated: ChildrenParticipated,
        PlayEquipment: PlayEquipment,
        ParkClean: ParkClean,
        ParkToilet: ParkToilet,
        ParkDisturb: ParkDisturb,
        ParkDisturbOther: ParkDisturbOther,
        ImproveIdea: ImproveIdea,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          OtherSubmitFn();
        } else {
          console.log(message);
          setClicked(false);
          alert("Data Not Added!!");
        }
      })
      .catch((error) => {
        alert("Error6 " + error);
        setClicked(false);
      });
  };
  const OtherSubmitFn = () => {
    setClicked(true);
    fetch(OtherApi, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        WaterRank: WaterRank,
        SanitationRank: SanitationRank,
        DrainageRank: DrainageRank,
        SolidWasteRank: SolidWasteRank,
        TransportRank: TransportRank,
        WaterReason: WaterReason,
        SanitationReason: SanitationReason,
        DrainageReason: DrainageReason,
        SolidWasteReason: SolidWasteReason,
        TransportReason: TransportReason,
        PriorityRemark: PriorityRemark,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let loginObj = JSON.stringify(response);
        var parsed = JSON.parse(loginObj);
        var success = parsed.success;
        var message = parsed.message;
        if (success == 1) {
          console.log(message);
          uploadDocFiles();
        } else {
          console.log(message);
          setClicked(false);
          alert("Data Not Added!!");
        }
      })
      .catch((error) => {
        alert("Error7 " + error);
        setClicked(false);
      });
  };
  const uploadDocFiles = async () => {
    // If file selected then create FormData
    for (let i = 0; i < File.length; i++) {
      const fileToUpload = File[i];
      const data = new FormData();
      data.append("name", fileToUpload.name);
      data.append("file_attachment", fileToUpload);
      // Please change file upload URL
      let res = await fetch(DocUploadApi, {
        method: "post",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      });
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        DocUploadResult++;
      }
    }
    if ((DocUploadResult = File.length)) {
      alert("Success");
      // Alert.alert("SUCCESS", "Data Added Successfully", [
      //   {
      //     text: "Cancel",
      //     onPress: () => navigation.replace("SurveyList"),
      //     style: "cancel",
      //   },
      //   {
      //     text: "OK",
      //     onPress: () => navigation.replace("SurveyList"),
      //   },
      // ]);
      setIsPressed(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        margin: 3,
        borderColor: "black",
        borderWidth: 2,
      }}
    >
      {/* <ScrollView style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}> */}
      <View style={styles.logo}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#25285B",
            textAlign: "center",
          }}
        >
          Directorate of Urban Development, Nagaland{"\n"}Infrastructure
          Development in Nagaland
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "#25285B",
            textAlign: "center",
          }}
        >
          (Project Number-54166-001)
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#25285B",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Household Survey
        </Text>
      </View>

      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <GeneralInfo tabLabel="GENERAL INFO" getData={getGIChildData} />
        <HouseHold
          tabLabel="HOUSEHOLD CHARACTERISTICS"
          getData={getHhChildData}
        />
        <GeneralEco
          tabLabel="GENERAL ECONOMIC STATUS"
          getData={getGEcoChildData}
        />
        <GeneralHealth
          tabLabel="GENERAL HEALTH & HYGIENE"
          getData={getGenHealthData}
        />
        <WaterSupply tabLabel="WATER SUPPLY" getData={getWaterSupplyData} />
        <Drainage
          tabLabel="DRAINAGE/SEWERAGE/SANITATION"
          getData={getDrainagePartData}
        />
        <WasteWater
          tabLabel="WASTEWATER DISPOSAL SYSTEM"
          getData={getWastewaterData}
        />
        <SolidWaste
          tabLabel="SOLID WASTE MANAGEMENT"
          getData={getSolidWasteData}
        />
        <RoadTransport
          tabLabel="ROAD/TRANSPORT/CONNECTIVITY"
          getData={getTransportData}
        />
        <Park tabLabel="PARK/OPEN SPACE" getData={getParkData} />
        <Others tabLabel="OTHER AMENITIES" getData={getOtherData} />
      </ScrollableTabView>
      {/* </ScrollView> */}
      {!isClicked ? (
        <TouchableOpacity
          onPress={SubmitFn}
          activeOpacity={0.8}
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            justifyContent: "center",
            marginBottom: 5,
            backgroundColor: "blue",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      ) : null}
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  flexdiv: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "rgba(16, 33, 62, 1)",
  },
  viewdiv: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  text: {
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  titleBox: {
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    fontSize: 14,
    width: 100,
    textAlignVertical: "center",
  },
  DataInputBoxSolid: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    backgroundColor: "#EBEBEB",
  },
});

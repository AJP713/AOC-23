//TODO I think this works but would take too long to end.

let rawEx = "11A = (11B, XXX)@11B = (XXX, 11Z)@11Z = (11B, XXX)@22A = (22B, XXX)@22B = (22C, 22C)@22C = (22Z, 22Z)@22Z = (22B, 22B)@XXX = (XXX, XXX)"
let directionsRawEx = "LR"



let rawFull = "HQV = (LSD, NCQ)@TLQ = (VLQ, KVB)@LND = (BFJ, LGF)@SRL = (VXG, BRQ)@BQJ = (FPN, QLP)@RCP = (RBR, RTQ)@KJL = (TVF, MMF)@XRF = (RQT, MQT)@TVR = (HLG, KJQ)@QJC = (DLG, HVL)@HQL = (JKK, SNF)@JHK = (LRD, DDR)@PVM = (XJD, KXM)@VCQ = (TTT, JMS)@KHQ = (SRH, BJC)@TKV = (VXX, GTG)@NTQ = (CCC, SHP)@PMB = (HCJ, PXT)@FFL = (FFT, HLS)@RFL = (CCS, QML)@PGB = (QQN, XMC)@CJX = (RNX, CHJ)@DBP = (RFK, FHH)@FLP = (MBM, MPS)@KBH = (MVJ, LHL)@FVF = (RJB, VSD)@RRQ = (BGH, BTC)@SNF = (XJG, SLG)@VHX = (NFH, MRC)@LSD = (SPJ, FJD)@DJP = (BPM, NRG)@RTR = (JHQ, VPS)@VFH = (RRN, HXX)@RRB = (CVM, CHM)@RRK = (KXG, RST)@HTF = (FQC, PMB)@XDJ = (LXC, MJV)@KTD = (XMX, GNP)@RST = (MGN, DCK)@BFF = (TMH, DDV)@FBP = (TNQ, HBV)@VKT = (VTK, XNB)@HVX = (SMQ, TQJ)@NSG = (FDR, TGD)@MKB = (KJD, SGP)@XNV = (DNT, BQQ)@NQR = (HQP, FFV)@RDV = (KLT, DHD)@HFV = (BLF, DPZ)@MCM = (PBL, KCJ)@SRC = (LNL, PVD)@DLH = (QHM, KSX)@TMF = (VNF, SRC)@LKB = (DDK, VNL)@PJT = (LHJ, RJF)@BPS = (BST, THS)@VFT = (KJL, RHH)@CSN = (DJP, QJD)@XKR = (DXS, XLT)@HHM = (JBR, FNJ)@NJD = (QCV, GPN)@SHP = (TNC, FLJ)@FPL = (FPD, CHV)@HMM = (VCQ, CDF)@QKK = (JQM, RKF)@DDV = (RGH, CLR)@DCF = (FVM, KQM)@QNM = (SXD, VJT)@FQA = (FDR, TGD)@VCM = (SKD, VBP)@DMD = (RLB, GVF)@NVK = (HVT, ZZZ)@FVQ = (STM, CHH)@SFT = (FFL, SHM)@NNT = (VXG, BRQ)@GMV = (XRS, CBP)@VVT = (QHM, KSX)@DNM = (QBF, MGD)@DVX = (SQN, DBP)@KKS = (VHB, CDQ)@NSF = (LJH, PVJ)@DXS = (QNM, GSJ)@DLV = (LBD, PLB)@FSQ = (XPV, THH)@MFB = (KNB, XHC)@RHS = (QLC, GKK)@PRD = (FSQ, KMG)@BJK = (SJF, TVR)@TXV = (NKJ, NDD)@HHP = (GJC, NXF)@JCC = (XGB, XGB)@DQX = (QMX, KHT)@NXF = (GSG, MXD)@VQP = (NDC, CJT)@KMG = (THH, XPV)@BFV = (FPN, QLP)@HND = (JDM, RLS)@QJD = (BPM, NRG)@TCH = (PJB, JMX)@CRD = (DLT, QJC)@LMG = (LSX, LSX)@FPZ = (KRF, JND)@VBD = (KLQ, PJT)@CCQ = (MLX, KGB)@QLC = (KNN, KNN)@RBK = (TQJ, SMQ)@PVK = (XHX, JGN)@CLQ = (MLR, RKQ)@SHS = (HVT, HVT)@DDT = (TPJ, RNV)@MCL = (JMT, JTQ)@VNF = (PVD, LNL)@CDF = (JMS, TTT)@PHL = (HDQ, MXG)@LPK = (LMG, CJH)@SLG = (QDD, LVX)@DLL = (JJJ, PDH)@JSA = (NLQ, NJD)@SQN = (RFK, FHH)@TLN = (XBJ, GDG)@PVD = (RTP, FJR)@GVH = (QKK, VFN)@VKK = (GLF, MFB)@CGF = (HHP, LJB)@DDK = (DLQ, SMR)@LST = (XFP, TKM)@RVL = (DDR, LRD)@MNR = (MFM, TNP)@TQX = (TQB, GVQ)@XMH = (MKP, PXS)@SDT = (QFN, JDX)@GJA = (DLH, VVT)@RBX = (MRC, NFH)@MQM = (HMM, FJH)@GVS = (JGJ, PTM)@XBJ = (VSG, DXV)@NKT = (DGD, LND)@TNC = (RBK, HVX)@GRT = (BFV, BQJ)@JPL = (MVJ, LHL)@MXH = (CMD, MQM)@RJB = (TVN, BFF)@GSJ = (SXD, VJT)@PKT = (GNF, XLM)@RNX = (BXR, XQR)@GMX = (KKN, HLL)@PVR = (JJN, CSN)@KVB = (HTF, DHC)@QFN = (KXC, JVX)@GKK = (KNN, HFV)@LPM = (LMG, LMG)@HLG = (NSG, NSG)@XPV = (TBV, DQD)@PHR = (SSD, NGM)@RKN = (QVM, LRV)@GNS = (NPL, RCP)@BGB = (NLG, RGT)@DVL = (LVF, MKC)@HVJ = (KXX, MVF)@SNT = (CPM, VFT)@FRD = (BVP, GMM)@FFT = (HDG, HRL)@QQQ = (BVP, GMM)@DGJ = (PCJ, GMV)@HQP = (DNM, XVF)@PRV = (GXL, FBQ)@BQQ = (XBV, RHN)@MHL = (VBP, SKD)@KXC = (CRV, RPJ)@HMQ = (XFP, TKM)@HCX = (RVB, DDT)@SBK = (RFL, XNT)@QCV = (HCX, MXV)@RRN = (PFQ, DDB)@FDG = (CLB, XQG)@KVP = (VSM, QBQ)@GBD = (FPF, FHP)@GVR = (KBG, XDJ)@DTS = (KHQ, JVS)@CHJ = (BXR, XQR)@XDR = (FCL, FNM)@XVF = (QBF, MGD)@LVF = (XNV, PTH)@TMV = (SJF, SJF)@ZZZ = (GCC, XRF)@STM = (QRT, GFH)@GCC = (MQT, RQT)@PPN = (CHJ, RNX)@FPN = (CGF, DHN)@KLT = (DGP, BKF)@XBV = (HSG, BHD)@FNZ = (TGD, FDR)@VHR = (QLC, QLC)@JCM = (TCH, GJB)@SHC = (LPM, LPK)@RTP = (XRJ, HHM)@HVT = (XRF, GCC)@KDB = (MSC, JRB)@FDR = (PRD, XFR)@NLL = (SQN, DBP)@FJD = (JNT, HXR)@RHD = (BNH, BNV)@XQF = (SNF, JKK)@LLC = (PDP, CJC)@KMC = (CMD, MQM)@KHT = (FBK, SFT)@NFH = (BLC, PHR)@PBL = (LLC, GJG)@KLD = (LRJ, BND)@XJG = (QDD, LVX)@DPK = (XGJ, RRD)@FHH = (FVQ, DPN)@PMX = (QNF, STR)@BXR = (XVP, QMK)@XFR = (FSQ, KMG)@JJN = (QJD, DJP)@XQS = (CCQ, MMV)@VND = (BHT, LNJ)@PTH = (DNT, BQQ)@MLC = (DJD, LCM)@TKT = (BMT, BJP)@NLG = (XDC, BPC)@GTG = (SHC, BLH)@NKJ = (GRT, NTH)@MTX = (BQH, SNN)@CLN = (VXX, GTG)@QML = (DTM, FDG)@PJB = (SNT, TXC)@MHP = (RCV, PHL)@JNQ = (MFS, DST)@KHM = (JRL, FDK)@TNK = (PRG, JRP)@KPH = (NNT, SRL)@FDP = (RLN, GVH)@PSG = (RHG, KVP)@JQM = (HFK, NMN)@VNT = (DPK, QHD)@RQT = (BHQ, SKT)@BMT = (VQN, HNQ)@HFK = (GCL, XRB)@SJM = (KBG, XDJ)@VJF = (RGX, SNR)@DTM = (CLB, XQG)@FJR = (XRJ, HHM)@SPJ = (JNT, HXR)@TQB = (VXH, HTV)@XHC = (VCM, MHL)@HCJ = (FRR, GRB)@BQK = (MKM, KKS)@SKD = (QDG, QQV)@PTM = (VNT, XQD)@SMQ = (MCL, JDJ)@KQP = (PRG, JRP)@PBC = (BHX, QLT)@MKC = (PTH, XNV)@DBG = (RKG, VRH)@BTC = (RFS, CMX)@HRR = (RRN, HXX)@JHL = (MCK, VKT)@DDM = (PDK, BBF)@DTG = (CNK, VKD)@GRB = (HGN, FVF)@XHX = (TLN, GRL)@VPL = (CJX, PPN)@HLS = (HDG, HRL)@SFC = (HQL, XQF)@MTH = (NLQ, NJD)@PBF = (THK, FLP)@DFV = (KJP, NKT)@RBS = (JNQ, PFS)@BXN = (SHP, CCC)@PDH = (MCM, NRQ)@GLF = (XHC, KNB)@KBG = (LXC, MJV)@XRB = (RBQ, TVP)@FLV = (TKV, CLN)@BHQ = (KBH, JPL)@GLS = (KLT, DHD)@NJN = (NSS, GSN)@LDV = (XLT, DXS)@MCK = (XNB, VTK)@LHJ = (RDL, KPH)@KJQ = (NSG, FNZ)@DJD = (SBG, JHH)@LHL = (BPK, MNH)@SXV = (FMR, MQS)@QDD = (JCC, KHV)@CVM = (XSX, QDB)@LGF = (FPL, PBK)@TCG = (STR, QNF)@HDG = (MTN, QHV)@GJB = (PJB, JMX)@NTL = (PLB, LBD)@SQK = (FJV, XMH)@KDL = (SNN, BQH)@NSS = (PCP, KDB)@GDG = (DXV, VSG)@HTG = (FHN, XCT)@FRR = (FVF, HGN)@XQD = (QHD, DPK)@FRT = (JHL, RRL)@SVQ = (BBF, PDK)@JJX = (XVJ, BLG)@SNR = (GXH, NJN)@DJG = (GHX, BVD)@GNP = (PBC, XKL)@XDC = (XTS, GNS)@DHN = (HHP, LJB)@RVG = (TFF, RTR)@CVC = (VFH, HRR)@BPC = (GNS, XTS)@BVP = (RDK, TXV)@DDR = (PMX, TCG)@MJV = (QLD, DGJ)@JGN = (GRL, TLN)@THH = (TBV, DQD)@BNF = (GJB, TCH)@XVP = (TTX, KQH)@SHB = (NTL, DLV)@QCK = (FMR, MQS)@VRH = (XJP, DMD)@BLF = (DLH, VVT)@TBX = (JSM, GHP)@JMX = (TXC, SNT)@JDM = (TMF, PVC)@XMX = (PBC, XKL)@CMD = (FJH, HMM)@BCX = (CSN, JJN)@QGG = (KJT, KHM)@CJT = (GRV, PPS)@CLR = (DDJ, STP)@MPS = (CVR, NFD)@FHP = (HST, NQR)@THK = (MBM, MPS)@BRB = (XMS, JGG)@CHH = (QRT, GFH)@FPD = (TBX, PSN)@FDK = (VHR, RHS)@XMS = (TMV, BJK)@XRJ = (JBR, FNJ)@GSN = (PCP, KDB)@QGD = (KVB, VLQ)@FMT = (BMK, LNK)@LSX = (FMT, FMT)@MMJ = (LKB, FHL)@NCJ = (RBS, QBJ)@SSD = (FNK, RRQ)@PVG = (TFL, SBK)@LNK = (DTG, TLL)@KSX = (JTJ, DBG)@KNB = (VCM, MHL)@CBP = (LKF, BRB)@KCP = (HMQ, LST)@BVD = (QND, GDD)@TLL = (CNK, VKD)@RDK = (NKJ, NDD)@TFL = (XNT, RFL)@TXR = (HJH, HND)@VBJ = (FMT, PKZ)@QBJ = (JNQ, PFS)@PQR = (BMT, BJP)@MGN = (XPX, MFD)@NMB = (MVF, KXX)@MNH = (BNF, JCM)@KKN = (TCQ, MTC)@MXG = (VTT, FRT)@NLV = (TNQ, HBV)@SGP = (XKR, LDV)@QTS = (KXG, RST)@XGJ = (NSF, QNH)@QLD = (PCJ, GMV)@MGD = (QKR, MSB)@GGD = (SJM, GVR)@TLD = (QBP, XGQ)@TBN = (BPS, VHJ)@FNK = (BGH, BTC)@NKK = (DDM, SVQ)@XQG = (MJR, SPB)@PFQ = (TLD, XPL)@VFN = (JQM, RKF)@GRV = (BJM, VFK)@CJH = (LSX, VBJ)@DBV = (KLD, XMM)@JSP = (DJG, MRM)@KRF = (RBC, RRB)@PVJ = (MTX, KDL)@JRP = (JPH, MLC)@XNT = (QML, CCS)@FRL = (MRM, DJG)@JTF = (JFX, FPZ)@BLG = (FDC, PVM)@PCP = (MSC, JRB)@GHX = (GDD, QND)@STP = (NLV, FBP)@BMN = (TXX, GKL)@JDX = (KXC, JVX)@BRQ = (TQD, PGB)@VXG = (PGB, TQD)@CMX = (DHT, RHD)@STR = (SCK, BLK)@DGD = (BFJ, LGF)@FJM = (TKT, PQR)@HST = (FFV, HQP)@RGX = (GXH, NJN)@MXD = (QGR, PSG)@JRL = (VHR, RHS)@BGH = (RFS, CMX)@SPB = (DXD, SFC)@KXM = (GVS, RLH)@KFK = (XMH, FJV)@QDG = (NPS, DLL)@TQD = (XMC, QQN)@RNV = (TQX, GDR)@KNN = (BLF, BLF)@PBG = (QFN, JDX)@JHQ = (DML, PBF)@VQN = (JPP, SFN)@CHV = (PSN, TBX)@RVB = (TPJ, RNV)@BXK = (KHT, QMX)@MFS = (MBV, MBV)@KXG = (MGN, DCK)@JMS = (MHX, VJF)@TRM = (CJX, PPN)@KLQ = (LHJ, RJF)@TVG = (NTF, DVL)@HJH = (JDM, RLS)@XMT = (RCV, PHL)@GCK = (XVJ, BLG)@BLH = (LPM, LPK)@RLH = (JGJ, PTM)@CHM = (XSX, QDB)@JGD = (FRL, JSP)@PLP = (MMV, CCQ)@VJT = (QSQ, RKN)@NDC = (PPS, GRV)@SMP = (JGN, XHX)@QBF = (MSB, QKR)@HGR = (JHK, RVL)@XTS = (RCP, NPL)@MJR = (SFC, DXD)@CJJ = (QVK, PPQ)@XJT = (MNR, XNN)@VRK = (GNP, XMX)@BST = (KTD, VRK)@CNK = (XQS, PLP)@TMH = (CLR, RGH)@MQS = (PVG, LDT)@GJK = (MSF, JTF)@LBD = (CVD, QGG)@VGL = (RVL, JHK)@KXX = (RRK, QTS)@SDG = (HJH, HND)@DML = (THK, FLP)@PPS = (BJM, VFK)@BQH = (SDG, TXR)@XGQ = (VPL, TRM)@BMK = (TLL, DTG)@CKM = (NCJ, MXK)@RDL = (NNT, SRL)@NRQ = (KCJ, PBL)@KRG = (NCJ, MXK)@PNB = (NCQ, LSD)@RCV = (HDQ, MXG)@FKR = (FNM, FCL)@XMM = (LRJ, BND)@QNT = (GXL, FBQ)@XLT = (GSJ, QNM)@XKL = (QLT, BHX)@SMR = (QGD, TLQ)@VTK = (JCN, FLV)@JPS = (PPQ, QVK)@FBK = (SHM, FFL)@RKG = (DMD, XJP)@QQN = (KMC, MXH)@TCQ = (DQX, BXK)@QNF = (BLK, SCK)@MFD = (VND, DLB)@PPQ = (DFV, XSP)@MKM = (VHB, CDQ)@MSB = (NKK, PSJ)@VHB = (JPC, JPC)@PDP = (KNL, VBD)@MRC = (PHR, BLC)@HBV = (BQK, PDN)@PPG = (MFB, GLF)@BPM = (FHV, FMJ)@TKM = (TNK, KQP)@VLS = (XNN, MNR)@FDC = (KXM, XJD)@FQC = (PXT, HCJ)@KKX = (FRD, QQQ)@FCL = (CFK, RHC)@JND = (RBC, RRB)@JBR = (JGD, DRR)@PDK = (SSP, KCP)@BQR = (TXX, GKL)@FPK = (TFF, RTR)@RRL = (VKT, MCK)@FVM = (PNB, HQV)@QMK = (TTX, KQH)@PBA = (JND, KRF)@BNH = (BQR, BMN)@JTQ = (XJT, VLS)@PBK = (CHV, FPD)@CCS = (FDG, DTM)@NLQ = (QCV, GPN)@XQR = (XVP, QMK)@MMV = (MLX, KGB)@VSM = (SDT, PBG)@LNJ = (NHR, BGB)@GFH = (QCK, SXV)@BHT = (NHR, BGB)@FJH = (VCQ, CDF)@GNF = (RVG, FPK)@TXX = (CJJ, JPS)@QMX = (FBK, SFT)@QSQ = (LRV, QVM)@DXV = (FNF, SNQ)@PVC = (VNF, SRC)@HFR = (KLD, XMM)@SRH = (GGT, GMX)@JGG = (TMV, BJK)@MXK = (RBS, QBJ)@NPS = (JJJ, PDH)@RHH = (TVF, MMF)@HRL = (MTN, QHV)@MSF = (JFX, JFX)@RBC = (CVM, CHM)@MMF = (GCK, JJX)@GHP = (CTQ, SHB)@NPX = (DTS, XPF)@XGB = (HXC, HXC)@XVJ = (FDC, PVM)@XNB = (FLV, JCN)@XCT = (PRV, QNT)@LXC = (QLD, DGJ)@JJJ = (NRQ, MCM)@SFG = (CJT, NDC)@MRM = (GHX, BVD)@DST = (MBV, HNG)@NCQ = (SPJ, FJD)@JPH = (DJD, LCM)@LRV = (VHX, RBX)@RPJ = (TTJ, HKN)@RBR = (PPG, VKK)@XSP = (NKT, KJP)@VBP = (QDG, QQV)@XLM = (FPK, RVG)@HNQ = (JPP, SFN)@RMD = (HXC, KPB)@FMS = (MLR, RKQ)@CRV = (TTJ, HKN)@NMN = (GCL, XRB)@BPK = (JCM, BNF)@LKF = (XMS, JGG)@JRB = (MMJ, DRH)@RTQ = (PPG, VKK)@XNN = (TNP, MFM)@GCL = (RBQ, TVP)@RFK = (FVQ, DPN)@TFF = (VPS, JHQ)@JNT = (DMM, FDP)@JVX = (CRV, RPJ)@JPC = (MSF, MSF)@BJC = (GGT, GMX)@MVF = (RRK, QTS)@HLL = (MTC, TCQ)@DQD = (DCF, PJG)@DCK = (XPX, MFD)@RHG = (VSM, QBQ)@LRD = (TCG, PMX)@BNV = (BQR, BMN)@KQM = (PNB, HQV)@MLR = (GFS, MKB)@QBQ = (PBG, SDT)@KGB = (VGL, HGR)@KHV = (XGB, RMD)@JBT = (XLM, GNF)@NDD = (NTH, GRT)@MXV = (RVB, DDT)@QKV = (NTF, DVL)@CTR = (XPF, DTS)@KJP = (DGD, LND)@LJB = (NXF, GJC)@LNL = (RTP, FJR)@MBM = (NFD, CVR)@QVK = (DFV, XSP)@LXL = (PBP, SFP)@BJM = (FJM, RPD)@QHV = (SFG, VQP)@KJD = (XKR, LDV)@CVD = (KJT, KHM)@DLQ = (QGD, TLQ)@TXC = (CPM, VFT)@VSD = (TVN, BFF)@RFS = (RHD, DHT)@KJT = (JRL, FDK)@THV = (XCT, FHN)@FFV = (XVF, DNM)@BHX = (KRG, CKM)@TVF = (JJX, GCK)@GGT = (HLL, KKN)@RGH = (DDJ, STP)@PBP = (QKV, TVG)@VTT = (RRL, JHL)@SKT = (JPL, KBH)@QDB = (NMB, HVJ)@GMM = (RDK, TXV)@CTQ = (NTL, DLV)@FMR = (LDT, PVG)@FHV = (VHP, GBD)@QNH = (LJH, PVJ)@JFX = (JND, KRF)@DLB = (LNJ, BHT)@QHM = (JTJ, DBG)@TPJ = (TQX, GDR)@XPF = (JVS, KHQ)@NTH = (BFV, BQJ)@GVQ = (HTV, VXH)@VXH = (JBT, PKT)@MSC = (MMJ, DRH)@DRR = (FRL, JSP)@PKZ = (LNK, BMK)@DLT = (DLG, HVL)@KQH = (FMS, CLQ)@XPX = (DLB, VND)@PSJ = (SVQ, DDM)@FNJ = (DRR, JGD)@VKD = (PLP, XQS)@RHN = (BHD, HSG)@QBH = (QJC, DLT)@QHD = (RRD, XGJ)@BBF = (KCP, SSP)@NGM = (RRQ, FNK)@PFS = (MFS, DST)@NFD = (LXL, RXF)@RVS = (GVR, SJM)@FJV = (PXS, MKP)@KCJ = (LLC, GJG)@GSG = (PSG, QGR)@FHN = (PRV, QNT)@HVL = (NPX, CTR)@NRG = (FHV, FMJ)@DDJ = (NLV, FBP)@PJG = (KQM, FVM)@TTX = (FMS, CLQ)@FPF = (HST, NQR)@RBQ = (KKX, BKP)@TGD = (XFR, PRD)@SHM = (HLS, FFT)@BKF = (PVR, BCX)@SJF = (HLG, HLG)@NHR = (NLG, RGT)@JMT = (XJT, VLS)@HXR = (FDP, DMM)@HDQ = (FRT, VTT)@JTJ = (VRH, RKG)@PXS = (PVK, SMP)@NPL = (RTQ, RBR)@MTN = (SFG, VQP)@AAA = (XRF, GCC)@VXX = (SHC, BLH)@RLN = (VFN, QKK)@DLG = (NPX, CTR)@TTT = (VJF, MHX)@QKR = (NKK, PSJ)@TNQ = (BQK, PDN)@CFK = (GLS, RDV)@XJP = (RLB, GVF)@XPL = (XGQ, QBP)@GVF = (CVC, JQR)@THS = (KTD, VRK)@DPZ = (VVT, DLH)@PXT = (FRR, GRB)@JKK = (SLG, XJG)@JCN = (TKV, CLN)@JGJ = (VNT, XQD)@SFN = (MHP, XMT)@BJP = (VQN, HNQ)@HNG = (SHS, NVK)@VHJ = (BST, THS)@TVZ = (NJD, NLQ)@MQT = (SKT, BHQ)@HKN = (BXN, NTQ)@XFP = (KQP, TNK)@GJG = (CJC, PDP)@RJF = (RDL, KPH)@MVJ = (MNH, BPK)@MLX = (VGL, HGR)@VNL = (DLQ, SMR)@GJC = (MXD, GSG)@BHD = (FKR, XDR)@NNA = (BMK, LNK)@RHC = (GLS, RDV)@CDQ = (JPC, GJK)@QGR = (RHG, KVP)@SNN = (SDG, TXR)@PRG = (JPH, MLC)@QBP = (TRM, VPL)@MHX = (RGX, SNR)@RLS = (TMF, PVC)@FBQ = (TBN, NND)@BFJ = (PBK, FPL)@BKP = (QQQ, FRD)@GDR = (TQB, GVQ)@DRH = (FHL, LKB)@TVN = (DDV, TMH)@DNT = (RHN, XBV)@JSM = (CTQ, SHB)@PDN = (MKM, KKS)@RLB = (JQR, CVC)@XRS = (BRB, LKF)@SNQ = (HFR, DBV)@TVP = (KKX, BKP)@HXC = (MTH, MTH)@QLT = (KRG, CKM)@KPB = (MTH, TVZ)@LVX = (JCC, KHV)@VLQ = (HTF, DHC)@XSX = (NMB, HVJ)@MBV = (SHS, SHS)@PLB = (QGG, CVD)@PCJ = (XRS, CBP)@TQJ = (MCL, JDJ)@FLJ = (HVX, RBK)@MTC = (BXK, DQX)@MKP = (SMP, PVK)@SFP = (TVG, QKV)@HXX = (PFQ, DDB)@LJH = (MTX, KDL)@PSN = (GHP, JSM)@DHC = (PMB, FQC)@RXF = (SFP, PBP)@DMM = (GVH, RLN)@NTF = (LVF, MKC)@QVM = (VHX, RBX)@BND = (THV, HTG)@FNM = (CFK, RHC)@HSG = (XDR, FKR)@BLK = (QBH, CRD)@VFK = (RPD, FJM)@SBG = (NLL, DVX)@DXD = (XQF, HQL)@HGN = (RJB, VSD)@GXL = (TBN, NND)@QND = (SQK, KFK)@FNF = (DBV, HFR)@JDJ = (JMT, JTQ)@TTJ = (BXN, NTQ)@CVR = (RXF, LXL)@SSP = (HMQ, LST)@JVS = (BJC, SRH)@SXD = (QSQ, RKN)@XJD = (GVS, RLH)@HTV = (PKT, JBT)@DPN = (STM, CHH)@RGT = (BPC, XDC)@GPN = (HCX, MXV)@DHT = (BNH, BNV)@QLP = (CGF, DHN)@QQV = (DLL, NPS)@SCK = (CRD, QBH)@XMC = (KMC, MXH)@FHL = (DDK, VNL)@NND = (BPS, VHJ)@TNP = (GGD, RVS)@RPD = (TKT, PQR)@JQR = (HRR, VFH)@TBV = (PJG, DCF)@GXH = (NSS, GSN)@GDD = (KFK, SQK)@JHH = (NLL, DVX)@RKQ = (GFS, MKB)@GKL = (CJJ, JPS)@CCC = (FLJ, TNC)@KNL = (KLQ, PJT)@MFM = (GGD, RVS)@QRT = (SXV, QCK)@LCM = (SBG, JHH)@VHP = (FHP, FPF)@DGP = (BCX, PVR)@GRL = (XBJ, GDG)@CLB = (SPB, MJR)@BLC = (SSD, NGM)@VSG = (SNQ, FNF)@FMJ = (VHP, GBD)@CPM = (RHH, KJL)@RKF = (NMN, HFK)@LDT = (TFL, SBK)@VPS = (PBF, DML)@GFS = (KJD, SGP)@DDB = (XPL, TLD)@CJC = (KNL, VBD)@LRJ = (THV, HTG)@JPP = (MHP, XMT)@RRD = (NSF, QNH)@DHD = (DGP, BKF)"
let directionsFull = "LRRLLRLLRRRLRRLRLRRRLRLLRLRRLRRRLRRRLRRLRRRLRLRRRLRLRRLRLRRRLRRLLRRLLLRRLRLRRRLRLRRRLRRLRRRLRLLRRLRRLRLRRRLRRRLRRLRRLLRLLRRRLRLRRLRRRLRRLRRRLRRRLLLLRRLRLRRRLRRRLLRRLLRRLRRRLRRRLRLRLLRRLRLRLRLRLRRLRLRLRRRLRRLRRLRRLRRRLRLRRRLRLRRLRLLLLRRRLLRRRLRLLRRRLRLLRRRLLRRLRLRLRLRLLLLRRLRRRLRLLRRLRRRLRRRLRLRRLRRLRLLRRRR"

let directions = directionsRawEx
let data = rawEx



directions = directions.split("")
for(let i=0; i<directions.length;i++){
    if(directions[i]=="L"){
        directions[i]=1
    }else{
        directions[i]=2
    }
}
console.log(directions)

for(let i=0; i<directions.length;i++){
    directions[i]=Number(directions[i])
}
console.log("directions list:  "+directions)// directions is a list of 1 or 2's for left and right respecively.

data = data.split("@")
console.log(data)

let colStart = []
let colLeft = []
let colRight = []
for(let x =0; x<data.length;x++){
    colStart.push(data[x].substring(0, 3))
    colLeft.push(data[x].substring(7, 10))
    colRight.push(data[x].substring(12, 15))
}
console.log(colStart);
console.log(colLeft);
console.log(colRight);

let endA = []
for(let i=0; i<colStart.length;i++){
    if (colStart[i][2]=="A"){
        endA.push(i)
    }
}

let currIs = endA
console.log("current indexes: "+currIs)
let counter = 0
let dirCount = 0
let allZ = false

while(!allZ){
   // console.log(nextIs(currIs,directions[dirCount]))
    currIs = nextIs(currIs,directions[dirCount])
   // console.log("current indexes: "+currIs)
    counter ++
    dirCount= counter%directions.length
    //console.log("counter: "+ counter)
    //console.log("dirCounter: "+ dirCount)
    if(allEndZ(currIs)){
        console.log("finished at: " + counter )
        allZ = true
    }else{
        if(counter%100000 == 0){
            console.log("tik")
        }
    }
}
console.log("---------Final Count!!!    "+ counter)


function allEndZ(indList){
    for(let i=0; i<indList.length;i++){
        if(colStart[indList[i]][2]!="Z"){
            return false
        }
    }
    return true
}

function nextIs(indList, direction){
    let newIs = []
    for(let i=0; i<indList.length;i++){
        if(direction == 1){ //left
            newIs.push(colStart.indexOf(colLeft[indList[i]]))
        }else{  //right

            newIs.push(colStart.indexOf(colRight[indList[i]]))
        }
    }
    return newIs
}
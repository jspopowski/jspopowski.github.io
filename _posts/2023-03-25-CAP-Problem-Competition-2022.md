# CAP 2022/23 Problem Competition Submission
## Jared Popowski
This was my winning submission for Problem 2 of the [Canadian Association of Physicists Student Advisory Council Problem Competition 2022.](https://sac.cap.ca/index.php/events/sac-problem-competition-2022/)
### Problem 2: Heat Produced During a Cliff Diver's Fall
#### Question
The cliff divers of Acapulco take pride and pleasure in hurling themselves from a height of 35 m into a channel of water which is only 4-6 m deep (depending on the swell of the sea). A diver launches himself with a speed of 1 m/s from the top of the cliff. He has a mass of 70 kg. His speed is 25 m/s just as he enters the water. How much thermal energy is produced during the fall (before the impact with the water)? Where does the thermal energy end up (i.e. which objects experience a [small] change in temperature)?

#### Solution
Regardless of whether the cliff diver is standing at the top of the cliff, actively plummeting, or having a cup of tea and playing a game of go, heat is transferred between their body, their clothes, and the surrounding air in the four conventional ways: **conduction**, **convection**, **radiation**, and **evaporation**. While falling, the diver also experiences **drag** as their body uses some of its potential energy to push air molecules out of their way, heating up the surface of their body as well as the air surrounding them. We will address each of these contributions in turn, but firstly, we must compute the motion of the diver and duration of the fall.

##### Motion of the Diver
For a human in free fall, the dominant drag force is quadratic, and we can neglect the linear drag term \cite{taylor}. Under this approximation, the equation of motion for the diver is

$$
\begin{align}
    m\frac{d^2\boldsymbol{x}}{dt^2} &= m\boldsymbol{g}-cv^2\boldsymbol{\hat{v}} \nonumber \\
    &=m\boldsymbol{g}-cv\boldsymbol{v}, \label{vel_EOM}
\end{align}
$$

where the coefficient $c$ for an object with frontal area $A$ in a fluid of density $\rho$ is defined as

$$
\begin{equation}\label{coeff}
c = \frac{1}{2}\rho C_{D}A.
\end{equation}
$$

Here $C_{D}$ is called the drag coefficient, which depends on the shape and orientation of the object and the Reynolds number. Splitting Equation (\ref{vel_EOM}) into component form, we find

$$
\begin{equation}\label{components}
\begin{rcases}
 m\dot{v}_x &= -c\sqrt{v_x^2+v_y^2}v_x\\
 m\dot{v}_y &= -mg-c\sqrt{v_x^2+v_y^2}v_y.
\end{rcases}
\end{equation}
$$

This is a pair of coupled differential equations which cannot be solved analytically \cite{taylor}. We instead solved them numerically with the initial conditions

$$
\begin{equation*}
    v_x(0) = \qty{1}{m/s}, \;\;\;\; v_y(0) = \qty{0}{m/s},
\end{equation*}
$$

and $x_0=y_0=\qty{0}{m}$ (putting the origin at the cliff's edge where the diver jumped from). We used the function \textit{scipy.integrate.odeint()} in Python to solve this set of equations, with the resulting speed and trajectory plots shown in Figure \ref{fig1}. Note that the coefficient $c$ in Equation (\ref{coeff}) served as a fit parameter to ensure that we obtained the correct final speed of \qty{25}{m/s} at the moment that the diver's y-position is \qty{-35}{m}.

\begin{figure}
  \centering
  \begin{subfigure}{.5\textwidth}
  \centering
  \includegraphics[width=\linewidth]{speed.png}
  \caption{}
  \label{speed}
  \end{subfigure}%
  \begin{subfigure}{.5\textwidth}
  \centering
  \includegraphics[width=\linewidth]{trajectory.png}
  \caption{}
  \label{trajectory}
  \end{subfigure}
  \caption{The motion of a cliff diver of Acapulco (solid curves). The corresponding motion in a vacuum is shown with long dashes. The dots show the diver's position at half-second intervals. (\protect\subref{speed}) The speed of the diver. (\protect\subref{trajectory}) The trajectory of the diver.}
\label{fig1}
\end{figure}

\textbf{We found that the total duration of the fall is approximately $t_{f}=\qty{2.71}{s}$.} As a sanity check, we can ensure that this time is longer than the fall time in vacuum, using the kinematics equation
\begin{equation}
    y(t) = y(0)+v_y(0)t-\frac{1}{2}gt^2.
\end{equation}

Applying the same initial conditions as above, this is

\begin{equation}
    0 = (\qty{35}{m})-\frac{1}{2}gt^2,
\end{equation}
giving us a dragless fall time of $t=\qty{2.67}{s}$, slightly faster as expected. I have also plotted the diver's trajectory in vacuum as the dashed lines in Figure {\ref{fig1}}.

##### Conduction/Convection
Conduction and convection are fundamentally the same: heat is transferred between two systems through molecular collisions. Convection is just the form of conduction that occurs between an object and the \textit{nonstationary} fluid that it is immersed in. Hence, one could rebrand conduction and convection as non-moving-fluid conduction and moving-fluid conduction, respectively. Practically speaking, we distinguish between the two because the rates of conduction and convection can be dramatically different. 

Since the diver is only in contact with the air during the jump and is moving relative to this air, we can safely ignore the effects of conduction. For convection, to a good approximation the thermal power losses or gains (in units of \si{W}) are proportional to the object's surface area and temperature difference with the surrounding fluid \cite{ubc},

\begin{equation}
P \approx K_{C}A(T_{\text{obj}}-T_{\text{env}}),
\end{equation}
where $T_{\text{obj}}$ and $T_{\text{env}}$ are the temperatures of the object and fluid respectively, and $K_{C}$ is an empirical coefficient that depends on the chemical constituents and geometry of the object and the object's relative velocity with the fluid (units of \si{W/(K\cdot m^2)}). For the human body, this coefficient is listed in Figure \ref{Kc} for various relative airspeeds.

\begin{figure}
  \centering
  \includegraphics[width=0.4\linewidth]{convection_coefficient.png}
  \caption{The convection coefficient $K_C$ of the human body for various airspeeds, reproduced from Reference \cite{ubc}.}
\label{Kc}
\end{figure}

From our Python solution to Equation (\ref{components}), we can find the times at which the various speed thresholds are hit during the fall, listed in the following table:

\begin{table}[h!]
\centering
\begin{tabular}{||c | c||} 
 \hline
 \text{Speed} & \text{Time} \\ [0.5ex] 
 \hline\hline
 $\qty{0}{m/s}$ & \qty{0}{s} \\ 
 $\qty{2}{m/s}$ & \qty{0.177}{s} \\
 $\qty{10}{m/s}$ & \qty{1.03}{s} \\ 
 $\qty{20}{m/s}$ & \qty{2.12}{s} \\[1ex] 
 \hline
\end{tabular}
\label{table:1}
\end{table}

Hence, a decent approximation for the convective power lost by the diver over the course of the fall is obtained by applying the relevant convection coefficients $K_C$ over the portion of the trajectory falling between two tabled speeds. This gives us
\begin{align}
    Q_{\text{con}}=P\cdot t_{f}\approx \big[&(\qty{3}{W/(K\cdot m^2)})(\qty{0.177}{s}) \nonumber \\
    &+(\qty{26}{W/(K\cdot m^2)})(\qty{1.03}{s}-\qty{0.177}{s}) \nonumber \\
    &+(\qty{37}{W/(K\cdot m^2)})(\qty{2.12}{s}-\qty{1.03}{s}) \nonumber \\
    &+(\qty{41}{W/(K\cdot m^2)})(\qty{2.71}{s}-\qty{2.12}{s})\big]A(T_{\text{obj}}-T_{\text{env}}) \label{convective}
\end{align}
The typical body surface area for a human is about $A=\qty{1.8}{m^2}$ \cite{body}. We also assume that the diver's body temperature is $T_{\text{obj}}=\SI{37}{\celsius}$ and the air is at a temperature of $T_{\text{env}}=\SI{20}{\celsius}$. Plugging this into Equation (\ref{convective}) above, we find that \textbf{the convective heat loss of the diver during the fall is approximately}
\begin{equation*}
    Q_{\text{con}}=\SI{2669}{\joule}.
\end{equation*}

##### Radiation
The average thermal power emitted from a human body due to the combination of metabolic processes varies depending on the level of activity, but is approximately \qty{100}{W} at any given time \cite{ubc}. Since the fall time was $t_f=\qty{2.71}{s}$, \textbf{the heat radiated over the course of the fall is then approximately}
\begin{equation*}
    Q_{\text{rad}} = \qty{100}{W}\times\qty{2.71}{s}=\SI{271}{\joule}.
\end{equation*}

##### Evaporation
It takes some thermal energy for a substance to change its phase, called the \textit{latent heat} of the transition. At all times, water on the skin or in the lungs is absorbing heat from the body, and when this heat equals the latent heat of vaporization the water turns into vapor. This is why sweating works to cool you down on a hot day in the summer: excess water on your skin draws away heat from your skin and vaporizes, carrying the excess thermal energy with it.

Let's assume there is no visible sweating from the diver on a comfortable \SI{20}{\celsius} day in Acapulco. Still, the total evaporative loss will be approximately 25-30\% of their metabolic rate \cite{ubc}. In the radiation section we learned that the metabolic rate is about \qty{100}{W}, meaning that the evaporative thermal power lost is about \qty{30}{W}. \textbf{Over the course of the fall, the heat lost to evaporation is then approximately}
\begin{equation*}
    Q_{\text{evap}} = \qty{30}{W}\times\qty{2.71}{s}=\SI{81}{\joule}.
\end{equation*}

##### Drag
We should calculate what the speed \textit{would} be of the diver before they hit the water, if air resistance was not a thing. If it is faster than the \qty{25}{m/s}, the difference in kinetic energy is explained by the friction involved in pushing air molecules out of the way, also known as drag.

Calling the zero of potential energy the surface of the water, the initial gravitational potential energy is
\begin{equation*}
mgh=(\qty{70}{kg})(\qty{9.8}{m/s^2})(\qty{35}{m}) = \SI{24010}{\joule},
\end{equation*}
which all gets converted into kinetic energy at the bottom. Since the diver started with a kinetic energy of
\begin{equation*}
\frac{1}{2}mv^2=\frac{1}{2}(\qty{70}{kg})(\qty{1}{m/s})^2 = \SI{35}{\joule},
\end{equation*}
the total kinetic energy at the surface of the water in the absence of any drag/friction would be $\SI{24010}{\joule}+\SI{35}{\joule}=\SI{24045}{\joule}$, which would lead to a final speed of
\begin{equation*}
    v = \sqrt{(2\times \qty{24045}{J})/\qty{70}{kg}}=\qty{26.21}{m/s}.
\end{equation*}
Since we are told that the diver's speed is \qty{25}{m/s} just as they enter the water, which is a kinetic energy of \SI{21875}{\joule}, the difference in kinetic energy is entirely due to drag with the air, which manifests as increased thermal energy for the air molecules near the diver's body, but also in part on the surface of the diver's body. \textbf{So the thermal energy transferred to the air and the diver's body as a result of drag is}
\begin{equation*}
    Q_{\text{drag}}=\SI{24045}{\joule}-\SI{21875}{\joule} = \SI{2170}{\joule}.
\end{equation*}

#### Answer - Total Thermal energy
Combining all of the various thermal contributions, we find that the total thermal energy produced over the course of the fall is
\begin{equation}
    Q_{\text{tot}} = Q_{\text{con}} + Q_{\text{rad}} + Q_{\text{evap}} + Q_{\text{drag}} = \SI{5191}{\joule}.
\end{equation}
Recalling that $\SI{1}{\calorie}=\SI{4.184}{\joule}$, and the dietary Calorie is $\SI{1}{\Calorie}=\SI{1000}{\calorie}=\SI{4184}{\joule}$, we see that our result is on the same order as a single dietary Calorie. If somehow captured, this amount of thermal energy could be used to raise \qty{1}{kg} of water by \SI{1}{\celsius}. In reality, however, this energy is primarily transferred to the air molecules in the diver's path as they fall, slightly heating up the air locally. The surface of the diver's body also marginally heats up during the dive due to drag, though this is a smaller effect because the specific heat capacity of air ($\sim \qty{1}{kJ/(kg\cdot K)}$) is smaller than that of the human body ($\sim \qty{3}{kJ/(kg\cdot K)}$) \cite{air,heat_bod}.
